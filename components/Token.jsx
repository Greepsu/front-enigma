import React from "react";
import Image from "next/image";
import Link from "next/link";
import { shortToK, colorChangePrice } from "../utils/utils";
import styles from "../styles/Token.module.css";

export default function Token({ ...tokenData }) {
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
          <Image
            className={styles.tokenLogo}
            src={tokenData.logo}
            width={25}
            height={25}
            alt="logo"
          />
          <div className={styles.tokenName}>{tokenData.name}</div>
          <div className={styles.tokenId}>({tokenData.symbol})</div>
        </div>
        <div className={styles.tokenPrice}>{tokenData.price.toFixed(2)} $</div>
        <div className={styles.tokenVolume}>
          {shortToK(tokenData.totalSupply)}
        </div>
        <div
          className={styles.tokenTvl}
          style={colorChangePrice(tokenData.priceChange24h)}
        >
          {tokenData.priceChange24h.toFixed(2)} %
        </div>
      </div>
    </Link>
  );
}
