import React from "react";
import { useTopTokens } from "../contexts/TopTokensContext";
import Image from "next/image";
import leftArrow from "../assets/icon/arrow-left.svg";
import rightArrow from "../assets/icon/arrow-right.svg";
import styles from "../styles/TopTokens.module.css";
import { useWindowSize } from "react-use";

export default function TopTokens() {
  const {
    paginateTokens,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    renderTokens,
  } = useTopTokens();
  const { width } = useWindowSize();

  if (!paginateTokens) return null;
  return (
    <div className={styles.topTokens}>
      <div className={styles.topTokensList}>
        <div className={styles.topTokensListLegend}>
          <div className={styles.legend}>#</div>
          <div className={styles.legend}>Name</div>
          <div className={styles.legendR}>Price</div>
          {width > 768 ? (
            <>
              <div className={styles.legendR}>Total liquidity</div>
              <div className={styles.legendR}>Price change</div>
            </>
          ) : (
            ""
          )}
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
