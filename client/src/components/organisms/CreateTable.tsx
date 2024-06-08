import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../cli/card";
import { Button } from "../cli/button";

const CreateTable = () => {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Table Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Select a table from the navigation panel on the left to view its data,
          or create a new one.
        </p>
      </CardContent>
      <CardFooter>
        <Button size={'sm'} >Create a new table </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateTable;
