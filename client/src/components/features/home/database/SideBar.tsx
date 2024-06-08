import { Button } from "../../../cli/button";
import React from "react";
import { LuPlus } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu";

const SideBar = () => {
  return (
    <aside className="w-64 flex flex-col p-2 gap-4 border rounded-md border-border">
      <Button size={"sm"} className="items-center justify-normal flex gap-2">
        <LuPlus />
        <span>Create a new table</span>
      </Button>

      <div className="border-b border-border"></div>

      <nav className="grid gap-1 ">
        <Button
          size={"sm"}
          variant={"ghost"}
          className="w-full bg-muted flex items-center justify-start gap-1.5"
        >
          <LuTable2 className="size-4" />
          <span>user</span>
        </Button>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="w-full flex items-center justify-start gap-1.5"
        >
          <LuTable2 className="size-4" />
          <span>comments</span>
        </Button>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="w-full flex items-center justify-start gap-1.5"
        >
          <LuTable2 className="size-4" />
          <span>posts</span>
        </Button>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="w-full flex items-center justify-start gap-1.5"
        >
          <LuTable2 className="size-4" />
          <span>videos</span>
        </Button>
      </nav>
    </aside>
  );
};

export default SideBar;
