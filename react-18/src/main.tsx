import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement, {
  onRecoverableError: (error) => console.error("recovering", error),
  identifierPrefix: "main-root",
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
