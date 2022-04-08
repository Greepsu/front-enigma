import React, { useEffect, useState } from "react";
import styles from "../styles/TopTokens.module.css";
import Token from "./Token";
import useApi from "../hooks/useApi";

export default function TopTokens(tokens) {
  if (!tokens) {
    return "Loading";
  }
  const renderTokens = () => {
    return Object.keys(tokens).map((token, index) => {
      const tokenObject = {
        key: index,
        rank: index + 1,
        name: token,
        logo: tokens[token].denom,
        id: tokens[token].id,
        price: tokens[token].price,
        volume24h: tokens[token].volume_usd,
        tvl: tokens[token].liquidity_usd,
      };
      return (
        <>
          <Token {...tokenObject} />
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
          <div className={styles.legendR}>Volume 24H</div>
          <div className={styles.legendR}>TVL</div>
        </div>
        {renderTokens()}
      </div>
    </div>
  );
}
