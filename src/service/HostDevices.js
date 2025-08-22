// src/service/HostDevices.js
import { useState, useEffect } from "react";

const useHostDevices = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const fetchDeavices = async (url = null) => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl = url || `${import.meta.env.VITE_SERVER_URL}hosts/devices/`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDevices(data.results);
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
      console.error("Error fetching host devices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeavices();
  }, []);

  return {
    devices,
    loading,
    error,
    pagination,
    refresh: () => fetchDeavices(),
    fetchPage: (url) => fetchDeavices(url),
  };
};

export default useHostDevices;
