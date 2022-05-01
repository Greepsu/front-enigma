import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Token.module.css";

export default function Token({ ...tokenData }) {
  const colorChangePrice = () => {
    if (tokenData.priceChange24h > 0) {
      return { color: "green" };
    } else if (tokenData.priceChange24h < 0) {
      return { color: "red" };
    }
  };
  const shortToK = (data) => {
    if (data > 1000) {
      return `${Math.round((data / 1000).toFixed(2))} K`;
    } else {
      return data;
    }
  };

  return (
    <a href="#">
      <div className={styles.token}>
        <div className={styles.tokenNumber}>{tokenData.rank}</div>
        <div className={styles.tokenNameInfo}>
          <Image
            className={styles.tokenLogo}
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
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
        <div className={styles.tokenTvl} style={colorChangePrice()}>
          {tokenData.priceChange24h.toFixed(2)} %
        </div>
      </div>
    </a>
  );
}
