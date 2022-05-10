import React from "react";
import styles from "../styles/TopMovers.module.css";
import Mover from "./Mover";

export default function TopMovers() {
  return (
    <div className={styles.topMovers}>
      <h4>Top Movers</h4>
      <div className={styles.movers}>
        <Mover />
        <Mover />
        <Mover />
        <Mover />
        <Mover />
        <Mover />
      </div>
    </div>
  );
}
