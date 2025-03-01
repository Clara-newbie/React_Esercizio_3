import useSWR from "swr";

export default function useGithubUser(username) {
  if (username === null) return;

  function handleRefresh() {
    mutate();
  }

  const { data, error, mutate, isLoading } = useSWR(
    `https://api.github.com/users/${username}`
  );

  return {
    data,
    loading: isLoading,
    error,
    handleRefresh,
  };
}
