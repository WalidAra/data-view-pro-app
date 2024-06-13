import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/cli/ui/avatar";

const NavBar = () => {
  return (
    <div>
      <header className="sticky w-full top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <h1>Logo</h1>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
    </div>
  );
};

export default NavBar;
