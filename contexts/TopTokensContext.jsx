import React, { useState, useEffect, useContext, createContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { paginate } from "../utils/utils";
import Token from "../components/Token";
import styles from "../styles/TopTokens.module.css";
import { useWindowSize } from "react-use";

export const TopTokensContext = createContext({});

export function TopTokensProvider({ children }) {
  const { data } = useContext(TokenContext);

  const [paginateTokens, setPaginateTokens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!data) return;
    setPaginateTokens(paginate(data, 10, currentPage));
  }, [data, currentPage]);

  const goToNextPage = () => setCurrentPage((page) => page + 1);

  const goToPreviousPage = () => setCurrentPage((page) => page - 1);

  const renderTokens = () => {
    return paginateTokens.map((token) => {
      if (!paginateTokens) return null;
      const tokenData = {
        key: token.id,
        rank: token.cmc_rank,
        name: token.name,
        logo: `https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${token.name.toLowerCase()}.png`,
        symbol: token.symbol,
        id: token.id,
        price: token.quote.USD.price,
        totalSupply: token.total_supply,
        volume24: token.quote.USD.volume_24h,
        volumeChange24h: token.quote.USD.volume_change_24h,
        priceChange24h: token.quote.USD.percent_change_24h,
      };
      return (
        <div className={styles.tokenContainer} key={token.id}>
          <Token {...tokenData} />
          <div className={styles.separator}></div>
        </div>
      );
    });
  };

  const values = {
    paginateTokens,
    goToNextPage,
    goToPreviousPage,
    currentPage,
    renderTokens,
  };

  return (
    <TopTokensContext.Provider value={values}>
      {children}
    </TopTokensContext.Provider>
  );
}

export function useTopTokens() {
  const context = useContext(TopTokensContext);
  if (!context)
    throw new Error("useTopTokens should be used within a TopTokensProvider");
  return context;
}
