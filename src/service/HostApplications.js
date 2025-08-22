// src/service/HostApplications.js
import { useState, useEffect } from "react";

const useHostApplications = (deviceId) => {
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHostApplications = async () => {
    if (!deviceId) return;

    try {
      setLoading(true);
      setError(null);

      const apiUrl = `${
        import.meta.env.VITE_SERVER_URL
      }applications/applications/?host=${deviceId}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApp(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching host applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostApplications();
  }, [deviceId]);

  return {
    app,
    loading,
    error,
    refresh: () => fetchHostApplications(),
  };
};

export default useHostApplications;
