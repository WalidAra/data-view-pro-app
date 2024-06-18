import { Button } from "@/components/cli/ui/button";
import { LuDatabase } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu";
import { dbs } from "@/utils";
import { LuSettings } from "react-icons/lu";
import SelectDB from "./SelectDB";

type Props = {
  size: string;
  tableCount: string;
  name: string;
};

export default function TableNav({ name, size, tableCount }: Props) {
  const IconComponent = dbs[name];
  return (
    <div className="border-default justify-between flex h-12 gap-4 items-center border-b px-6">
      <div className="flex gap-4 items-center">
        <SelectDB />
        {IconComponent && (
          <IconComponent className="size-4 text-primary" />
        )}

        <div className="flex items-center gap-1 font-medium text-muted-foreground">
          <LuDatabase className="size-4 " />
          <p className="">{size}</p>
        </div>

        <div className="flex items-center gap-1 font-medium text-muted-foreground">
          <LuTable2 className="size-4" />
          <p className="">{tableCount}</p>
        </div>
      </div>
      <Button variant={"ghost"} size={"icon"}>
        <LuSettings className="size-5 " />
      </Button>
    </div>
  );
}
