import React, { useState, useEffect } from "react";
import styles from "../../styles/TokenInfo.module.css";
import Breadcrumbs from "nextjs-breadcrumbs";
import dynamic from "next/dynamic";
import { ChartSwitchButton } from "../../enums/Token";
import { useRouter } from "next/router";
import { shortToK, colorChangePrice } from "../../utils/utils";
import { useChartsContext } from "../../contexts/ChartsContext";

const VolumeCharts = dynamic(
  () => import("../../components/Charts/VolumeCharts"),
  {
    ssr: false,
  }
);
const TvlCharts = dynamic(() => import("../../components/Charts/TvlCharts"), {
  ssr: false,
});
const PriceCharts = dynamic(
  () => import("../../components/Charts/PriceCharts"),
  {
    ssr: false,
  }
);

export default function TokenInfo() {
  const { currentValue, setCurrentValue } = useChartsContext();
  const [visibleChart, setVisibleChart] = useState(ChartSwitchButton.PRICE);
  const [showValue, setShowValue] = useState();

  const router = useRouter();
  const tokenInfo = router.query;

  useEffect(() => {
    if (visibleChart === ChartSwitchButton.PRICE) {
      setShowValue(currentValue.price);
    } else if (visibleChart === ChartSwitchButton.TVL) {
      setShowValue(currentValue.tvl);
    } else if (visibleChart === ChartSwitchButton.VOLUME) {
      setShowValue(currentValue.volume);
    } else {
      return <div>Loading...</div>;
    }
  }, [visibleChart, currentValue]);

  const styleTvl = {
    backgroundColor: "#191b1f",
    textColor: "#545868",
    topLineColor: "rgba(120,134,134, 1)",
    topFillColor1: "rgba(120,134,134, 0.28)",
    topFillColor2: "rgba(120,134,134, 0.05)",
  };

  const styleVolume = {
    backgroundColor: "#191b1f",
    textColor: "#545868",
    color: "rgba(120,134,134, 1)",
  };

  const renderGraph = () => {
    if (!visibleChart) return;
    if (visibleChart === ChartSwitchButton.PRICE) {
      return (
        <PriceCharts setCurrentValue={setCurrentValue} styleCharts={styleTvl} />
      );
    } else if (visibleChart === ChartSwitchButton.TVL) {
      return (
        <TvlCharts setCurrentValue={setCurrentValue} styleCharts={styleTvl} />
      );
    } else if (visibleChart === ChartSwitchButton.VOLUME) {
      return (
        <VolumeCharts
          setCurrentValue={setCurrentValue}
          styleCharts={styleVolume}
        />
      );
    } else {
      return <div>Loading...</div>;
    }
  };

  const stylesSwitchButton = {
    buttonActive: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div className={styles.tokenInfo}>
      <Breadcrumbs
        useDefaultStyle
        rootLabel="Home"
        activeItemClassName={styles.brActive}
        transformLabel={(title) =>
          title.charAt(0).toUpperCase() + title.slice(1)
        }
      />
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.name}>{tokenInfo.name}</div>
            <div className={styles.id}>{tokenInfo.symbol}</div>
          </div>
          <div className={styles.description}>
            <div className={styles.price}>
              ${shortToK(parseInt(tokenInfo.price))}
            </div>
            <div
              className={styles.change24}
              style={colorChangePrice(parseInt(tokenInfo.priceChange24h))}
            >
              ({parseInt(tokenInfo.priceChange24h).toFixed(2)}%)
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <button>
            <div>Add Liquidity</div>
          </button>
          <button>
            <div>Trade</div>
          </button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.volumeInfo}>
          <div className={styles.tvl}>
            <h4 className={styles.title}>TVL</h4>
            <div className={styles.value}>$1.09b</div>
            <div className={styles.variation}>2.61%</div>
          </div>
          <div className={styles.tvl24h}>
            <h4 className={styles.title}>24h Trading Vol</h4>
            <div className={styles.value}>{shortToK(tokenInfo.volume24)}</div>
            <div
              style={colorChangePrice(parseInt(tokenInfo.volumeChange24h))}
              className={styles.variation}
            >
              {parseInt(tokenInfo.volumeChange24h).toFixed(2)}%
            </div>
          </div>
          <div className={styles.tvl7d}>
            <h4 className={styles.title}>7d Trading Vol</h4>
            <div className={styles.value}>$17.50b</div>
          </div>
          <div className={styles.fees24h}>
            <h4 className={styles.title}>24h Fees</h4>
            <div className={styles.value}>$1.40m</div>
          </div>
        </div>

        <div className={styles.allChartsContainer}>
          <div className={styles.topContainer}>
            <div className={styles.switchButtonGroup}>
              <button
                onClick={() => setVisibleChart(ChartSwitchButton.PRICE)}
                className={styles.switchButton}
                style={
                  visibleChart === ChartSwitchButton.PRICE
                    ? stylesSwitchButton.buttonActive
                    : null
                }
              >
                <span>Price</span>
              </button>
              <button
                onClick={() => setVisibleChart(ChartSwitchButton.TVL)}
                className={styles.switchButton}
                style={
                  visibleChart === ChartSwitchButton.TVL
                    ? stylesSwitchButton.buttonActive
                    : null
                }
              >
                <span>TVL</span>
              </button>
              <button
                onClick={() => setVisibleChart(ChartSwitchButton.VOLUME)}
                className={styles.switchButton}
                style={
                  visibleChart === ChartSwitchButton.VOLUME
                    ? stylesSwitchButton.buttonActive
                    : null
                }
              >
                <span>Volume</span>
              </button>
            </div>
            <div className={styles.graphValue}>
              <div>{shortToK(showValue)}</div>
            </div>
          </div>
          {renderGraph()}
        </div>
      </div>
    </div>
  );
}
