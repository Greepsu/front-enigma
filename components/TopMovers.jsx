import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import styles from "../styles/TopMovers.module.css";
import Mover from "./Mover";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

export default function TopMovers() {
  const { value } = useContext(TokenContext);
  const [topMovers, setTopMovers] = useState([]);

  useEffect(() => {
    if (value) setTopMovers(value.slice(0, 10));
  }, [value]);

  const renderMover = () => {
    return topMovers.map((token) => {
      const moverData = {
        key: token.id,
        logo: `${process.env.API_URL_LOGO}/${token.name.toLowerCase()}.png`,
        symbol: token.symbol,
        price: token.quote.USD.price,
        priceChange24h: token.quote.USD.percent_change_24h,
      };
      return (
        <>
          <Mover {...moverData} />
        </>
      );
    });
  };
  return (
    <div className={styles.topMovers}>
      <h5>Top Movers</h5>
      <div className={styles.movers}>
        <Ticker speed={6}>
          {() => <>{<div style={{ display: "flex" }}>{renderMover()}</div>}</>}
        </Ticker>
      </div>
    </div>
  );
}
