import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  hydrateRoot(
    container,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Failed to find the root container.");
}
