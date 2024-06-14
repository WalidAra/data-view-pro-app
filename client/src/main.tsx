import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import AuthProvider from "./providers/AuthProvider.tsx";
import ReduxProvider from "./features/state managment/ReduxProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>
);
