import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../cli/card";
import { Badge } from "../cli/badge";
import { MdDateRange } from "react-icons/md";
import { LuTable } from "react-icons/lu";
import { Button } from "../cli/button";
import { BiLogoPostgresql } from "react-icons/bi";
import { LuDatabase } from "react-icons/lu";

const DBCard = () => {
  return (
    <Card className="w-80 bg-card p-3 shadow-none ">
      <CardHeader className="p-0 flex flex-col gap-1.5">
        <CardTitle>Sales Database</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Badge className="rounded-xl bg-blue-400/50 border-2 border-blue-500 text-blue-500 hover:bg-blue-400/50">
            SQL
          </Badge>

          <Badge className="rounded-xl flex items-center gap-2 bg-purple-400/50 border-2 border-purple-500 text-purple-500 hover:bg-purple-400/50">
            <MdDateRange className="size-4" />
            <span className="">12-12-2020</span>
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-3 pb-0 px-0">
        <p className="text-muted-foreground">
          Tracks all sales data for the company.
        </p>

        <div className="w-full flex justify-between text-muted-foreground items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex items-start gap-1 font-medium  text-sm">
              <LuTable className="size-4" />
              20
            </span>
            <span className="flex items-start gap-1 font-medium  text-sm">
              <LuDatabase className="size-4" />
              4GB
            </span>

            <BiLogoPostgresql className="size-5" />
          </div>

          <Button size={'sm'} variant={"outline"}>View details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DBCard;
