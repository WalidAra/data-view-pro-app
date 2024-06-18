/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import MainView from "@/components/atoms/MainView";
import { Button } from "@/components/cli/ui/button";
import { Input } from "@/components/cli/ui/input";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from "@/components/cli/ui/select";
import DBCard from "@/components/organisms/DBCard";
import { ArrowDownIcon, Loader2, SearchIcon } from "lucide-react";
import { LuPlus } from "react-icons/lu";
import { Dialog, DialogTrigger } from "@/components/cli/ui/dialog";
import CreateDBCard from "./components/CreateDBCard";
import { useEffect, useMemo, useState } from "react";
import { Database } from "@/types";
import { useAuth } from "@/hooks/useAuth";
import { useFetch } from "@/hooks/useFetch";

const Dashboard = () => {
  const { token } = useAuth();
  const [databases, setDatabases] = useState<Database[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>("");

  const filterCards = useMemo(() => {
    if (searchValue !== "") {
      return databases.filter((db) =>
        db.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return databases;
    }
  }, [databases, searchValue]);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        method: "GET",
        endPoint: "/auth/my-dbs",
        token: token as string,
        TokenInclude: true,
      });
      setIsLoading(false);

      if (res.status) {
        setDatabases(res.data);
      }
    };

    getData();
  }, [token]);

  return (
    <MainView className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Database Management</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View and manage all your databases in one place.
        </p>
      </div>
      <div className="flex items-center  flex-wrap  gap-2 sm:gap-4 justify-end sm:justify-between">
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
            placeholder="Search databases..."
            className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="flex sm:w-auto w-full justify-between sm:justify-normal items-center gap-2 sm:gap-4">
          <Select>
            <SelectTrigger className="px-4 py-2 flex items-center gap-2 rounded-md">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="tables">Tables</SelectItem>
              <SelectItem value="size">Size</SelectItem>
              <SelectItem value="lastUpdated">Last Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size={"icon"} className="px-2 rounded-md">
            <ArrowDownIcon className="w-5 h-5" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center capitalize gap-3">
                <LuPlus className="size-5" />
                Add new database
              </Button>
            </DialogTrigger>
            <CreateDBCard />
          </Dialog>
        </div>
      </div>
      <section className=" flex-1  gap-2 sm:gap-4 p-3 sm:p-4 rounded-md border border-border">
        <div className="inline-flex w-full flex-wrap gap-3 sm:gap-4">
          {isLoading ? (
            <div className="flex items-center justify-center w-full ">
              <Loader2 className="size-14 text-primary animate-spin my-40" />
            </div>
          ) : (
            filterCards.map((database) => (
              <DBCard db={database} key={database.id} />
            ))
          )}
        </div>
      </section>
    </MainView>
  );
};

export default Dashboard;
