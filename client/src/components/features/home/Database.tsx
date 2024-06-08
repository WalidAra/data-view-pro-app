import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./database/SideBar";
import CreateTable from "../../organisms/CreateTable";

const Database = () => {
  const { dbId } = useParams();

  return (
    <main className="w-full flex-1 p-4 bg-background flex">
      <SideBar />

      <section className="grid place-items-center w-full flex-1">
        <CreateTable />
      </section>
    </main>
  );
};

export default Database;
