import React, { useContext, createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const TokenContext = createContext({});

export function TokenContextProvider({ children }) {
  const url = "/api/token";
  const { data, loading, error } = useFetch(url);
  const value = data.data;
  const values = { value, loading, error };

  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
}

export function useTokenContext() {
  const context = useContext(TokenContext);
  if (!context)
    throw new Error(
      "useTokenContext should be used within a TokenContextProvider"
    );
  return context;
}
