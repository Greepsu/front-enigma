import React from "react";
import styles from "../styles/TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <div className={styles.syncedBlock}>
          <span>Latest synced block: </span>
          <span>12345678</span>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.price}>
          <span>ETH Price: </span>
          <span>$12.34</span>
        </div>
      </div>
      <div className={styles.right}>
        <a href="https://v2.info.uniswap.org/#/">V2 Analytics</a>
        <a href="https://docs.uniswap.org/">Docs</a>
        <a href="https://app.uniswap.org/#/swap">App</a>
      </div>
    </div>
  );
}
