import React from "react";
import NavBar from "../templates/NavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  // check auth 
  return (
    <div className="flex h-screen w-full flex-col">
      <NavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
