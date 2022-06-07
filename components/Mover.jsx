import React from "react";
import { shortToK, colorChangePrice } from "../utils/utils";
import styles from "../styles/Mover.module.css";
import ImageWithFallback from "./ImageWithFallback";
import fallbackSrc from "../assets/icon/help-circle.svg";

export default function Mover({ ...moverData }) {
  return (
    <div className={styles.mover}>
      <ImageWithFallback
        src={moverData.logo}
        fallbackSrc={fallbackSrc}
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
