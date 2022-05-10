import React, { useEffect, useState } from "react";
import styles from "../styles/TopTokens.module.css";
import Token from "./Token";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import Image from "next/image";
import leftArrow from "../assets/icon/arrow-left.svg";
import rightArrow from "../assets/icon/arrow-right.svg";

export default function TopTokens() {
  const { data } = useContext(TokenContext);
  const [paginateTokens, setPaginateTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPaginateTokens(paginate(data, 10, currentPage));
  }, [data, currentPage]);

  if (!data) {
    return "Loading";
  }

  const goToNextPage = () => setCurrentPage((page) => page + 1);

  const goToPreviousPage = () => setCurrentPage((page) => page - 1);

  const paginate = (array, pageSize, pageNumber) =>
    array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

  const renderTokens = () => {
    return paginateTokens.map((token, index) => {
      const tokenData = {
        key: index,
        rank: token.cmc_rank,
        name: token.name,
        logo: `https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${token.name.toLowerCase()}.png`,
        symbol: token.symbol,
        id: token.id,
        price: token.quote.USD.price,
        totalSupply: token.total_supply,
        priceChange24h: token.quote.USD.percent_change_24h,
      };
      return (
        <>
          <Token {...tokenData} />
          <div className={styles.separator}></div>
        </>
      );
    });
  };

  return (
    <div className={styles.topTokens}>
      <div className={styles.topTokensList}>
        <div className={styles.topTokensListLegend}>
          <div className={styles.legend}>#</div>
          <div className={styles.legend}>Name</div>
          <div className={styles.legendR}>Price</div>
          <div className={styles.legendR}>Total liquidity</div>
          <div className={styles.legendR}>Price change</div>
        </div>
        {renderTokens()}
        <div className={styles.pagination}>
          <div
            style={
              currentPage === 1 ? { opacity: 0.2, pointerEvents: "none" } : {}
            }
          >
            <Image
              className={styles.paginationArrow}
              src={leftArrow}
              width={20}
              height={20}
              alt="left arrow"
              onClick={() => goToPreviousPage()}
            />
          </div>

          <div className={styles.page}>
            Page {currentPage} of {paginateTokens.length}
          </div>
          <div
            style={
              currentPage > paginateTokens.length - 1
                ? { opacity: 0.2, pointerEvents: "none" }
                : {}
            }
          >
            <Image
              className={styles.paginationArrow}
              src={rightArrow}
              width={20}
              height={20}
              alt="right arrow"
              onClick={() => goToNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
