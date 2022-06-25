import React from "react";
import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.center}>
      <div className={styles.loader}></div>
    </div>
  );
}
