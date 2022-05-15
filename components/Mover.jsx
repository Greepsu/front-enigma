import Image from "next/image";
import React from "react";
import { shortToK, colorChangePrice } from "../utils/utils";
import styles from "../styles/Mover.module.css";

export default function Mover({ ...moverData }) {
  return (
    <div className={styles.mover}>
      <Image
        src={moverData.logo}
        className={styles.logo}
        width={30}
        height={30}
        alt="logo"
      />
      <div className={styles.moverGroup}>
        <div className={styles.name}>{moverData.symbol}</div>
        <div className={styles.priceGroup}>
          <div className={styles.price}>${shortToK(moverData.price)}</div>
          <div
            style={colorChangePrice(moverData.priceChange24h)}
            className={styles.changePrice}
          >
            {moverData.priceChange24h.toFixed(2)} %
          </div>
        </div>
      </div>
    </div>
  );
}
