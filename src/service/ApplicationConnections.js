import { useState, useEffect } from "react";

const useApplicationConnections = (appId) => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const fetchApplicationConnections = async (url = null) => {
    if (!appId && !url) return;

    try {
      setLoading(true);
      setError(null);

      const apiUrl =
        url ||
        `${
          import.meta.env.VITE_SERVER_URL
        }applications/connections/?application=${appId}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        setConnections(data.results);
        setPagination({
          count: data.count,
          next: data.next,
          previous: data.previous,
          currentPage: url ? new URL(url).searchParams.get("page") || 1 : 1,
        });
      } else if (Array.isArray(data)) {
        setConnections(data);
        setPagination({
          count: data.length,
          next: null,
          previous: null,
          currentPage: 1,
        });
      } else {
        setConnections([data]);
        setPagination({
          count: 1,
          next: null,
          previous: null,
          currentPage: 1,
        });
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching application connections:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicationConnections();
  }, [appId]);

  return {
    connections,
    loading,
    error,
    pagination,
    refresh: () => fetchApplicationConnections(),
    fetchPage: (url) => fetchApplicationConnections(url),
  };
};

export default useApplicationConnections;
