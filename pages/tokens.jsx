import React from "react";
import TopMovers from "../components/TopMovers";
import TopTokens from "../components/TopTokens";
import styles from "../styles/Tokens.module.css";

export default function Tokens() {
  return (
    <div className={styles.tokens}>
      <TopMovers />
      <h4>Tokens list</h4>
      <TopTokens />
    </div>
  );
}
