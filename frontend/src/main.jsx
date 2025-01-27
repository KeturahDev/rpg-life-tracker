import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RPGStatsProvider } from "./contexts/RPGStatsContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RPGStatsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RPGStatsProvider>
  </StrictMode>
);
