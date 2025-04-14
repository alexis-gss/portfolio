import { useState, useEffect } from "react";
import { fetchGitHubData } from "@/lib/fetchGitHubData";

const FetchGitHubData = <T,>(endpoint: string, defaultValue: T) => {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchGitHubData<T>(endpoint);
        setData(result);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default FetchGitHubData;
