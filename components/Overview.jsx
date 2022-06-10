import React from "react";
import TopTokens from "./TopTokens";
import styles from "../styles/Overview.module.css";
import Trading from "./Trading";
import dynamic from "next/dynamic";
import { useChartsContext } from "../contexts/ChartsContext";
import { useTopTokens } from "../contexts/TopTokensContext";
import { shortToK, colorChangePrice } from "../utils/utils";

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
  const { currentValue, setCurrentValue } = useChartsContext();
  const { paginateTokens } = useTopTokens();

  const ethereum = paginateTokens[1];

  if (!ethereum) return <div>Loading...</div>;

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
          <div className={styles.graphValue}>
            <h4>TVL</h4>
            <div>{shortToK(currentValue.tvl)}</div>
          </div>
          <TvlCharts setCurrentValue={setCurrentValue} styleCharts={styleTvl} />
        </div>
        <div className={styles.graphCard}>
          <div className={styles.graphValue}>
            <h4>Volume</h4>
            <div>{shortToK(currentValue.volume)}</div>
          </div>
          <VolumeCharts
            setCurrentValue={setCurrentValue}
            styleCharts={styleVolume}
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <span>Volume 24H:</span>{" "}
          <span>{shortToK(ethereum.quote.USD.volume_24h)}</span>{" "}
          <span style={colorChangePrice(ethereum.quote.USD.volume_change_24h)}>
            ({parseInt(ethereum.quote.USD.volume_change_24h).toFixed(2)}%)
          </span>
        </div>
        <div className={styles.info}>
          <span>Price 24H:</span>{" "}
          <span>${shortToK(ethereum.quote.USD.price)}</span>{" "}
          <span
            style={colorChangePrice(
              parseInt(ethereum.quote.USD.percent_change_24h)
            )}
          >
            ({parseInt(ethereum.quote.USD.percent_change_24h).toFixed(2)}%)
          </span>
        </div>
        <div className={styles.info}>
          <span>TVL:</span> <span>$3.98b</span>{" "}
          <span
            style={colorChangePrice(
              parseInt(ethereum.quote.USD.percent_change_24h)
            )}
          >
            (3.56%)
          </span>
        </div>
      </div>
      <h4>Top Tokens</h4>
      <TopTokens />
      <h4>Trading</h4>
      <Trading />
    </div>
  );
}
