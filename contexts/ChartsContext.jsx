import React, { useState, useContext, createContext } from "react";

export const ChartsContext = createContext({});

export function ChartsContextProvider({ children }) {
  const [currentValue, setCurrentValue] = useState({
    tvl: undefined,
    volume: undefined,
    price: undefined,
  });

  const values = { currentValue, setCurrentValue };

  return (
    <ChartsContext.Provider value={values}>{children}</ChartsContext.Provider>
  );
}

export function useChartsContext() {
  const context = useContext(ChartsContext);
  if (!context)
    throw new Error(
      "useChartsContext should be used within a ChartsContextProvider"
    );
  return context;
}
