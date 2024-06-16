/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/cli/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/cli/ui/dropdown-menu";
import { RootState } from "@/features/state management/store/store";
import { defaultPic } from "@/utils";
import { useSelector } from "react-redux";

const NavBar = () => {
  const session = useSelector((state: RootState) => state.user);

  return (
    <div>
      <header className="sticky w-full top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <h1>Logo</h1>

        {session.isUser && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={session.user.image ? session.user.image : defaultPic}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="font-medium" >Settings</DropdownMenuItem>
              <DropdownMenuItem className="font-medium" >Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 font-medium" >Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
    </div>
  );
};

export default NavBar;
