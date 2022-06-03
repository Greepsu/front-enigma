import React from "react";
import TopTokens from "./TopTokens";
import styles from "../styles/Overview.module.css";
import Trading from "./Trading";
import dynamic from "next/dynamic";
const TvlCharts = dynamic(() => import("../components/Charts/TvlCharts"), {
  ssr: false,
});
const VolumeCharts = dynamic(
  () => import("../components/Charts/VolumeCharts"),
  {
    ssr: false,
  }
);

export default function Overview() {
  const styleTvl = {
    backgroundColor: "transparent",
    textColor: "#545868",
    topLineColor: "rgba(252,7,125,1)",
    topFillColor1: "rgba(252,7,125,0.28)",
    topFillColor2: "rgba(252,7,125,0.05)",
  };

  const styleVolume = {
    backgroundColor: "transparent",
    textColor: "#545868",
    color: "rgba(35,86,161,1)",
  };

  return (
    <div className={styles.overview}>
      <h4>Uniswap Overview</h4>
      <div className={styles.cardContainer}>
        <div className={styles.graphCard}>
          <h4>TVL</h4>
          <TvlCharts styleCharts={styleTvl} />
        </div>
        <div className={styles.graphCard}>
          <h4>Volume</h4>
          <VolumeCharts styleCharts={styleVolume} />
        </div>
      </div>
      <h4>Top Tokens</h4>
      <TopTokens />
      <h4>Trading</h4>
      <Trading />
    </div>
  );
}
