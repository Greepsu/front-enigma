import React from "react";
import styles from "../styles/Mover.module.css";

export default function Mover() {
  return (
    <div className={styles.mover}>
      <div className={styles.logo}>logo</div>
      <div className={styles.moverGroup}>
        <div className={styles.name}>name</div>
        <div className={styles.priceGroup}>
          <div className={styles.price}>400</div>
          <div className={styles.changePrice}>1238</div>
        </div>
      </div>
    </div>
  );
}
