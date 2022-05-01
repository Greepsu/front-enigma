import React, { useState } from "react";
import GraphCard from "./GraphCard";
import TopTokens from "./TopTokens";
import styles from "../styles/Overview.module.css";

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
      {/* <h4>Top CW-20 Tokens</h4>
      <TopTokens />
      <h4>Top Pools</h4>
      <TopTokens /> */}
    </div>
  );
}
