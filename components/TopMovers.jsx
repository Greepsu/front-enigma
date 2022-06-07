import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import styles from "../styles/TopMovers.module.css";
import Mover from "./Mover";
import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

export default function TopMovers() {
  const { data } = useContext(TokenContext);
  const [topMovers, setTopMovers] = useState([]);

  useEffect(() => {
    if (data) setTopMovers(data.slice(0, 10));
  }, [data]);

  const renderMover = () => {
    return topMovers.map((token) => {
      const moverData = {
        key: token.id,
        logo: `https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${token.name.toLowerCase()}.png`,
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
        <Ticker speed="6">
          {() => <>{<div style={{ display: "flex" }}>{renderMover()}</div>}</>}
        </Ticker>
      </div>
    </div>
  );
}
