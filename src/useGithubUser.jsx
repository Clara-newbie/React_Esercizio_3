import { useEffect, useState } from "react";

export default function useGithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser() {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch(`https://api.github.com/users/${username}`);
      const resultJson = await result.json();

      setData(resultJson);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username); // il parametro non è necessario
  }, [username]);

  return {
    data,
    loading,
    error,
    fetchGithubUser,
  };
}
