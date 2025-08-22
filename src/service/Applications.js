// src/service/Applications.js
import { useState, useEffect } from "react";

const useApplications = () => {
  const [apps, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const fetchApplications = async (url = null) => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl =
        url || `${import.meta.env.VITE_SERVER_URL}applications/applications/`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setLogs(data.results);
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
      console.error("Error fetching applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    apps,
    loading,
    error,
    pagination,
    refresh: () => fetchApplications(),
    fetchPage: (url) => fetchApplications(url),
  };
};

export default useApplications;
