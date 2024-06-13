import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  // check if accessToken exists then redirect to dashboard

  return (
    <main className="w-full h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
