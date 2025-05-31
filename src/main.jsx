import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FolioContextProvider } from "./context/FolioContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FolioContextProvider>
      <BrowserRouter basename="/dev-portfolio">
        <App />
      </BrowserRouter>
    </FolioContextProvider>
  </StrictMode>
);
