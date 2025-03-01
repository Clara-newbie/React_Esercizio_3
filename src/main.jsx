import { createRoot } from "react-dom/client";
import GithubUser from "./GithubUser";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <GithubUser username="mojombo" />
  </SWRConfig>
);
