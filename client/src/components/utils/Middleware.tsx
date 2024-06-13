/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const Middleware = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    if (
      !(
        location.pathname === "/auth/login" ||
        location.pathname === "/auth/register"
      )
    ) {
      return <Navigate to={"/auth/login"} />;
    }
  } else {
    if (
      location.pathname === "/auth/login" ||
      location.pathname === "/auth/register"
    ) {
      return <Navigate to={"/dashboard"} />;
    }
  }

  return children;
};

export default Middleware;
