import { useState, useEffect } from "react";
import { fetchGraphqlData } from "@/lib/fetchGraphqlData";

const FetchGraphqlData = <T,>(graphqlQuery: string, defaultValue: T) => {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchGraphqlData<T>(graphqlQuery);
        setData(result);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [graphqlQuery]);

  return { data, loading, error };
};

export default FetchGraphqlData;
