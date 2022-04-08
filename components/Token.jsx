import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../styles/Token.module.css";

export default function Token({ ...tokenObject }) {
  const tokenData = tokenObject;
  console.log(tokenData);
  return (
    <a href="#">
      {/* <div className={styles.token}>
        <div className={styles.tokenNumber}>{rank}</div>
        <div className={styles.tokenNameInfo}>
          <Image
            className={styles.tokenLogo}
            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
            width={25}
            height={25}
            alt="logo"
          />
          <div className={styles.tokenName}>zz</div>
          <div className={styles.tokenId}>({name})</div>
        </div>
        <div className={styles.tokenPrice}>{price}</div>
        <div className={styles.tokenVolume}>{volume24h}</div>
        <div className={styles.tokenTvl}>{tvl}</div>
      </div> */}
    </a>
  );
}
