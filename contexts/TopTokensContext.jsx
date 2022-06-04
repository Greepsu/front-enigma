import React, { useState, useContext, createContext } from "react";
import { TokenContext } from "../contexts/TokenContext";

export const TopTokens = createContext({});

export function TopTokensProvider({ children }) {
  const { data } = useContext(TokenContext);
  const [paginateTokens, setPaginateTokens] = useState([]);

  const value = useMemo(() => ({ data, setData }), [data]);

  return <TopTokens.Provider value={value}>{children}</TopTokens.Provider>;
}

export function useTopTokens() {
  const context = useContext(TopTokens);
  if (!context)
    throw new Error("useTopTokens should be used within a TopTokensProvider");
  return context;
}
