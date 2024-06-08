import React, { useState } from "react";
import { Input } from "../../cli/input";
import { LuArrowDown, LuSearch } from "react-icons/lu";
import { Button } from "../../cli/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../cli/select";
import DBCard from "../../organisms/DBCard";
import { LuArrowUp } from "react-icons/lu";

const Dashboard = () => {
  const [sortDirection, setSortDirection] = useState<string>("asc");

  return (
    <main className="flex flex-col flex-1 bg-background gap-4 p-4 sm:px-6 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold ">Database Management</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View and manage all your databases in one place.
        </p>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <div className="relative w-full max-w-md">
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            placeholder="Search databases..."
            className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Select

          // className="bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"

          // value={sortBy}
          // onValueChange={(value) => setSortBy(value)}
          >
            <SelectTrigger className="px-4 py-2 rounded-md">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="tables">Tables</SelectItem>
              <SelectItem value="size">Size</SelectItem>
              <SelectItem value="lastUpdated">Last Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() =>
              setSortDirection(sortDirection === "asc" ? "desc" : "asc")
            }
            size={"icon"}
            className="px-2"
          >
            {sortDirection === "asc" ? (
              <LuArrowUp className="w-5 h-5" />
            ) : (
              <LuArrowDown className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex-1 p-5 border-border border rounded-md overflow-hidden">
        <div className="w-full flex flex-wrap gap-5 ">
          <DBCard />
          <DBCard />
          <DBCard />
          <DBCard />
          <DBCard />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
