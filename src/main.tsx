import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ActiveSectionContextProvider from "./context/activeElementContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
      <App />
    </ActiveSectionContextProvider>
  </React.StrictMode>
);
