import { useGithubUser } from "./useGithubUser";

export default function GithubUser() {
  const { data, loading, error } = useGithubUser();
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error during the fetching process</h2>}
      {!data ? (
        <span>No user found</span>
      ) : (
        <div>
          <h2>{data.name}</h2>
          <p>{data.login}</p>
          <img src={data.avatar_url} alt={data.name} />
        </div>
      )}
    </div>
  );
}
