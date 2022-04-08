import { useState, useEffect } from "react";
const API = process.env.API_URL;

function useApi(endpoint) {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    fetch(`${API}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setTokens(data));
  }, [endpoint]);
  return tokens;
}

export default useApi;
