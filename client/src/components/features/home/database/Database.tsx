/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/cli/ui/card";
import { DatabaseInfo } from "@/types";
import { DatabaseIcon } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { LuTable2 } from "react-icons/lu";
import { AiFillDatabase } from "react-icons/ai";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/cli/ui/table";

type ContextType = {
  databaseData: DatabaseInfo;
};

const Database = () => {
  const { databaseData } = useOutletContext<ContextType>();

  return (
    <div className="overflow-auto flex-1 p-5 flex flex-col gap-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Tables</CardTitle>
            <LuTable2 className="size-5 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{databaseData.tableCount}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +5 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <DatabaseIcon className="size-5 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="text-2xl font-bold"> {databaseData.size} </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              total size of data
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Database Type</CardTitle>
            <AiFillDatabase className="size-5 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="text-2xl font-bold"> {databaseData.type} </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {databaseData.name}
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Table</TableHead>
                <TableHead>Rows</TableHead>
                <TableHead>Size</TableHead>
                <TableHead className="text-right">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">users</TableCell>
                <TableCell>1,234,567</TableCell>
                <TableCell>250 GB</TableCell>
                <TableCell className="text-right">2 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">products</TableCell>
                <TableCell>250,000</TableCell>
                <TableCell>100 GB</TableCell>
                <TableCell className="text-right">5 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">orders</TableCell>
                <TableCell>500,000</TableCell>
                <TableCell>150 GB</TableCell>
                <TableCell className="text-right">1 week ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">inventory</TableCell>
                <TableCell>100,000</TableCell>
                <TableCell>75 GB</TableCell>
                <TableCell className="text-right">3 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">customers</TableCell>
                <TableCell>750,000</TableCell>
                <TableCell>200 GB</TableCell>
                <TableCell className="text-right">1 day ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Database;
