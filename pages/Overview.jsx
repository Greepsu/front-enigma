import React, { useState } from "react";
import GraphCard from "../components/GraphCard";
import TopTokens from "../components/TopTokens";
import styles from "../styles/Overview.module.css";
import useApi from "../hooks/useApi";

export default function Overview() {
  const nativeTokens = useApi("summary/tokens/current/true");
  console.log(nativeTokens);

  return (
    <div className={styles.overview}>
      <h4>Uniswap Overview</h4>
      <div className={styles.cardContainer}>
        <GraphCard type="TVL" />
        <GraphCard type="Volume 24H" />
      </div>
      <h4>Top Native Tokens</h4>
      <TopTokens tokens={nativeTokens} />
      {/* <h4>Top CW-20 Tokens</h4>
      <TopTokens />
      <h4>Top Pools</h4>
      <TopTokens /> */}
    </div>
  );
}
