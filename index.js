import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssVarsProvider } from "@mui/joy/styles"; // ✅ เพิ่มบรรทัดนี้


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ✅ ครอบ App ด้วย CssVarsProvider
  <CssVarsProvider>
    <App />
  </CssVarsProvider>
);

reportWebVitals();
