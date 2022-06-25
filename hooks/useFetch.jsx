import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (!signal.aborted) {
          setData(json);
        }
        setLoading(false);
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};
