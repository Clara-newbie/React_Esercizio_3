import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FilteredList from "./FilteredList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilteredList />
  </StrictMode>
);
