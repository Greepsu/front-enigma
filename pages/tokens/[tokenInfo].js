import React from "react";
import styles from "../../styles/TokenInfo.module.css";
import Breadcrumbs from "nextjs-breadcrumbs";
import { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import Image from "next/image";
import dynamic from "next/dynamic";
const TvlCharts = dynamic(() => import("../../components/Charts/TvlCharts"), {
  ssr: false,
});

export default function TokenInfo() {
  const { data } = useContext(TokenContext);

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
            <Image
              src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
              width={24}
              height={24}
              className={styles.logo}
              alt="logo"
            />
            <div className={styles.name}>Ether</div>
            <div className={styles.id}>(ETH)</div>
          </div>
          <div className={styles.description}>
            <div className={styles.price}>$2.01k</div>
            <div className={styles.change24}>(100%)</div>
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
            <div className={styles.value}>$1.17b</div>
            <div className={styles.variation}>8.09%</div>
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
        <div className={styles.volumeChartsContainer}>
          <TvlCharts />
        </div>
      </div>
    </div>
  );
}
