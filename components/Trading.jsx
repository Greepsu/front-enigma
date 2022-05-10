import React from "react";
import styles from "../styles/Trading.module.css";

export default function Trading() {
  return (
    <div className={styles.trading}>
      <div className={styles.tradingCard}>
        <div className={styles.tradingInput}>
          <label>Enter address: </label>
          <input
            type="text"
            placeholder="0xc0ffee254729296a45a3885639AC7E10F9d54979"
          />
        </div>
        <div className={styles.tradingInput}>
          <label>Enter amount: </label>
          <input type="text" placeholder="2" />
        </div>
        <div className={styles.tradingInput}>
          <label>Enter message: </label>
          <input type="text" placeholder="Hello there !" />
        </div>
        <button className={styles.sendButton}>Send now</button>
      </div>
    </div>
  );
}
