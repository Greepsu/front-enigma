import React from "react";
import GraphCard from "./GraphCard";
import TopTokens from "./TopTokens";
import styles from "../styles/Overview.module.css";
import Trading from "./Trading";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <h4>Uniswap Overview</h4>
      <div className={styles.cardContainer}>
        <GraphCard type="TVL" />
        <GraphCard type="Volume 24H" />
      </div>
      <h4>Top Tokens</h4>
      <TopTokens />
      <h4>Trading</h4>
      <Trading />
    </div>
  );
}
