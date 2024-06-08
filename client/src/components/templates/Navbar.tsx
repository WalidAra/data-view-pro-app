import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../cli/avatar";

const Navbar = () => {
  return (
    <header className="sticky top-0 justify-between z-30 flex border-b h-14 items-center gap-4 bg-background px-4 sm:static sm:px-6">
      <h1>Logo</h1>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Navbar;
