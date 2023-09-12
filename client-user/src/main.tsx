import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/assets/styles/index.css";
import "virtual:uno.css";
import "virtual:unocss-devtools";
import "@unocss/reset/tailwind.css";
import { ThemeProvider } from "@/stores/app.context";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
