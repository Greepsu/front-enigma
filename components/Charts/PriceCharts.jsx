import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import styles from "../../styles/Charts.module.css";
import { priceData } from "../../utils/data";

const green = "#008000";
const red = "#FF0000";

export default function PriceCharts({ setCurrentValue }) {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#191b1f",
        textColor: "#545868",
      },
      grid: {
        vertLines: {
          color: "transparent",
        },
        horzLines: {
          color: "transparent",
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      handleScale: {
        mouseWheel: false,
      },
      priceScale: {
        borderColor: "#485c7b",
        borderVisible: false,
      },
      timeScale: {
        borderColor: "#485c7b",
        borderVisible: false,
      },
      VerticalGradientColor: {
        color: green,
      },
    });

    const candleSeries = chart.current.addCandlestickSeries({
      upColor: green,
      downColor: red,
      borderDownColor: red,
      borderUpColor: green,
      wickDownColor: red,
      wickUpColor: green,
    });

    candleSeries.setData(priceData);

    chart.current.subscribeCrosshairMove((param) => {
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.x > chartContainerRef.current.clientWidth ||
        param.point.y < 0 ||
        param.point.y > chartContainerRef.current.clientHeight
      ) {
        return;
      } else {
        setCurrentValue(param.seriesPrices.get(candleSeries).close);
      }
    });
  }, [setCurrentValue]);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  return (
    <div className={styles.priceCharts}>
      <div ref={chartContainerRef} className={styles.priceChartsContainer} />
    </div>
  );
}
