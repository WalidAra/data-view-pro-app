/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import ReduxProvider from "./features/state management/ReduxProvider.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import Toaster from "./components/molecules/Toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Toaster />
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </AuthProvider>
);
