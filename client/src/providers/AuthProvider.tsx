import React, { createContext, useEffect, useState } from "react";

type Props = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Auth = createContext<Props>({
  token: null,
  setToken: () => null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("dvp-auth");
    return storedToken || null;
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("dvp-auth");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return <Auth.Provider value={{ token, setToken }}>{children}</Auth.Provider>;
};

export default AuthProvider;
