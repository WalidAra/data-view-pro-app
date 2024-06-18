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
import { LogoutItem } from "../molecules/LogoutItem";
import { Link } from "react-router-dom";
import { SiMicrosoftsqlserver } from "react-icons/si";

const NavBar = () => {
  const session = useSelector((state: RootState) => state.user);

  return (
    <div>
      <header className="sticky w-full top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-7">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <SiMicrosoftsqlserver className="size-8" />
        </Link>

        {session.isUser && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={session.user.image ? session.user.image : defaultPic}
                  alt={session.user.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutItem />
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </header>
    </div>
  );
};

export default NavBar;
