import { useAuth } from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const DontBeShame = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();

  if (token) return <Navigate to={"/dashboard"} />;

  return children;
};

export default DontBeShame;
