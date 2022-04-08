import React from "react";
import styles from "../styles/GraphCard.module.css";

export default function GraphCard({ type }) {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 2000, amt: 2900 },
  ];

  return (
    <div className={styles.graphCard}>
      <h4>{type}</h4>
      <div className={styles.charts}></div>
    </div>
  );
}
