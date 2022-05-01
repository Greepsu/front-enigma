import React, { useState, useMemo, useContext, createContext } from "react";

export const TokenContext = createContext({});

export function TokenContextProvider({ children, initialData }) {
  const [data, setData] = useState(initialData);

  const value = useMemo(() => ({ data, setData }), [data]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
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
