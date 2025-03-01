import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, handleRefresh } = useGithubUser(username);

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
          <button type="button" onClick={handleRefresh}>
            Aggiorna i dati
          </button>
        </div>
      )}
    </div>
  );
}
