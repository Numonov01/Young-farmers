// src/service/FireWallRules.js
import { useState, useEffect } from "react";

const useFirewallRules = () => {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
    currentPage: 1,
  });

  const fetchRules = async (url = null) => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl =
        url || `${import.meta.env.VITE_SERVER_URL}firewall/firewall-rules/`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRules(data.results);
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
      console.error("Error fetching firewall rules:", err);
    } finally {
      setLoading(false);
    }
  };

  const createRule = async (ruleData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}firewall/firewall-rules/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ruleData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const newRule = await response.json();
      setRules((prevRules) => [newRule, ...prevRules]);
      return newRule;
    } catch (err) {
      setError(err.message);
      console.error("Error creating firewall rule:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteRule = async (ruleId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}firewall/firewall-rules/${ruleId}/`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setRules((prevRules) => prevRules.filter((rule) => rule.id !== ruleId));
      return true;
    } catch (err) {
      setError(err.message);
      console.error("Error deleting firewall rule:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRules();
  }, []);

  return {
    rules,
    loading,
    error,
    pagination,
    refresh: () => fetchRules(),
    fetchPage: (url) => fetchRules(url),
    createRule,
    deleteRule,
  };
};

export default useFirewallRules;
