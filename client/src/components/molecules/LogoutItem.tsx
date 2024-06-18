import { DropdownMenuItem } from "../cli/ui/dropdown-menu";

export const LogoutItem = () => {
  const logOut = () => {
    localStorage.removeItem("dvp-auth");
    window.location.reload();
  };

  return (
    <DropdownMenuItem onClick={logOut} className="text-red-500">
      Logout
    </DropdownMenuItem>
  );
};
