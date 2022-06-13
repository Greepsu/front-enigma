import React, { useState, useEffect } from "react";
import styles from "../styles/TopBar.module.css";
import useAlchemy from "../hooks/useAlchemy";
import { useTopTokens } from "../contexts/TopTokensContext";
import { shortToK } from "../utils/utils";

export default function TopBar() {
  const { paginateTokens } = useTopTokens();
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    const eth = paginateTokens.filter((token) => token.symbol === "ETH");
    if (!eth.length) return;
    setEthPrice(eth[0].quote.USD.price);
  }, [paginateTokens, ethPrice]);

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <div className={styles.syncedBlock}>
          <span>Latest synced block: </span>
          <span>{useAlchemy()}</span>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.price}>
          <span>ETH Price: </span>
          <span>${shortToK(ethPrice)}</span>
        </div>
      </div>
      <div className={styles.right}>
        <a href="https://v2.info.uniswap.org/#/">V2 Analytics</a>
        <a href="https://docs.uniswap.org/">Docs</a>
        <a href="https://app.uniswap.org/#/swap">App</a>
      </div>
    </div>
  );
}
