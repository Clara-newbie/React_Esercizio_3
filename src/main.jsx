import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import ChatApp from "./ChatApp";
import "./index.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <ChatApp />
  </SWRConfig>
);
