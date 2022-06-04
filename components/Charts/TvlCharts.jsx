import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import styles from "../../styles/Charts.module.css";
import { tvlData } from "../../utils/data";

export default function TvlCharts({ setCurrentValue, styleCharts }) {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: styleCharts.backgroundColor,
        textColor: styleCharts.textColor,
        fontFamily: "Inter, sans-serif",
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
        horzLine: {
          color: "rgba(120,134,134, 0)",
          width: 0,
        },
        vertLine: {
          style: 0,
          color: "rgba(120,134,134, 0.2)",
        },
      },
      handleScale: {
        mouseWheel: false,
      },
      priceScale: {
        visible: false,
      },
      timeScale: {
        borderColor: "#485c7b",
        borderVisible: false,
        fixRightEdge: true,
        fixLeftEdge: true,
        tickMarkFormatter: (time) => {
          const date = new Date(time.year, time.month, time.day);
          return date.getDate();
        },
      },
    });

    const baselineSeries = chart.current.addBaselineSeries({
      topLineColor: styleCharts.topLineColor,
      topFillColor1: styleCharts.topFillColor1,
      topFillColor2: styleCharts.topFillColor2,
      lineWidth: 2,
      crosshairMarkerBorderColor: "#fff",
      priceLineVisible: false,
    });

    baselineSeries.setData(tvlData);

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
        setCurrentValue(param.seriesPrices.get(baselineSeries));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentValue]);

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
