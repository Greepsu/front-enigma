import React from "react";
import Link from "next/link";
import { shortToK, colorChangePrice } from "../utils/utils";
import styles from "../styles/Token.module.css";
import ImageWithFallback from "./ImageWithFallback";
import fallbackImg from "../assets/icon/help-circle.svg";
import { useWindowSize } from "react-use";

export default function Token({ ...tokenData }) {
  const { width } = useWindowSize();

  return (
    <Link
      href={{
        pathname: `/tokens/${tokenData.name.toLowerCase()}`,
        query: { ...tokenData },
      }}
      passHref
    >
      <div className={styles.token}>
        <div className={styles.tokenNumber}>{tokenData.rank}</div>
        <div className={styles.tokenNameInfo}>
          <ImageWithFallback
            className={styles.tokenLogo}
            src={tokenData.logo}
            fallbackSrc={fallbackImg}
            width={25}
            height={25}
            alt="logo"
          />
          <div className={styles.tokenName}>{tokenData.name}</div>
          <div className={styles.tokenId}>({tokenData.symbol})</div>
        </div>
        <div className={styles.tokenPrice}>{shortToK(tokenData.price)} $</div>
        {width > 768 ? (
          <>
            <div className={styles.tokenVolume}>
              {shortToK(tokenData.totalSupply)}
            </div>
            <div
              className={styles.tokenTvl}
              style={colorChangePrice(tokenData.priceChange24h)}
            >
              {tokenData.priceChange24h.toFixed(2)} %
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
