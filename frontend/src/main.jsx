import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RPGStatsProvider } from "./contexts/RPGStatsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RPGStatsProvider>
      <App />
    </RPGStatsProvider>
  </StrictMode>
);
