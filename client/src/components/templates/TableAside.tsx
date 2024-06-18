/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "../cli/ui/button";
import { LuPlus, LuTable2 } from "react-icons/lu";
import { SearchIcon } from "lucide-react";
import { Input } from "../cli/ui/input";
import { Separator } from "../cli/ui/separator";
import { Link } from "react-router-dom";

type Props = {
  tables: string[];
  dbId: string;
};

const TableAside = ({ tables, dbId }: Props) => {
  return (
    <aside className="xl:w-72 sm:w-60 md:w-64 flex flex-col border-r shrink-0">
      <div className="border-default flex h-12 items-center border-b px-6">
        <h4 className="text-lg font-semibold">Table Editor</h4>
      </div>

      <div className="flex flex-col gap-2 w-full p-4">
        <Button
          size={"sm"}
          variant={"secondary"}
          className="flex items-center border justify-normal gap-2"
        >
          <LuPlus className="size-4" />
          <span>Create new table</span>
        </Button>

        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            placeholder="Search databases..."
            className="pl-10 pr-4 rounded-md bg-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div className="w-full pb-4 px-4 ">
        <Separator />
      </div>

      <nav className="flex flex-col w-full px-4 gap-2">
        {tables.map((table) => (
          <Link to={`/dashboard/${dbId}/${table}`}>
            <Button
              key={table}
              size={"sm"}
              variant={"ghost"}
              className=" border w-full text-sm flex items-center gap-2 justify-normal "
            >
              {/* bg-muted */}
              <LuTable2 className="size-4" />
              <span> {table} </span>
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default TableAside;
