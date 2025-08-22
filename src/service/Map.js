import { useState, useEffect } from "react";

const useConnectionMap = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const fetchMaps = async (url = null) => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl =
        url || `${import.meta.env.VITE_SERVER_URL}applications/connections/`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMaps(data.results || []);
      setPagination({
        count: data.count,
        next: data.next,
        previous: data.previous,
        currentPage: url
          ? url.includes("page=")
            ? parseInt(url.match(/page=(\d+)/)[1])
            : 1
          : 1,
      });
    } catch (err) {
      setError(err.message);
      console.error("Error fetching connection maps:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaps();
  }, []);

  return {
    maps,
    loading,
    error,
    pagination,
    refresh: () => fetchMaps(),
    fetchPage: (url) => fetchMaps(url),
  };
};

export default useConnectionMap;
