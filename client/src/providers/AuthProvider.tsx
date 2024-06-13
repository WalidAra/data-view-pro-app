import { createContext, useEffect, useState } from "react";

type Props = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Auth = createContext<Props>({
  token: null,
  setToken: () => null,
});

import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("dvp-auth");

    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <Auth.Provider value={{ token, setToken }}> {children} </Auth.Provider>
  );
};

export default AuthProvider;
