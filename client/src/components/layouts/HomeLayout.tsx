import React from "react";
import Navbar from "../templates/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
