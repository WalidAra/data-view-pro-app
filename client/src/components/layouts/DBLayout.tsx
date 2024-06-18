/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import MainView from "@/components/atoms/MainView";
import { useEffect, useState } from "react";
import TableAside from "../templates/TableAside";
import { DatabaseInfo } from "@/types";
import TableNav from "../organisms/TableNav";
import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useFetch } from "@/hooks/useFetch";
import { Loader2 } from "lucide-react";

const DBLayout = () => {
  const { databaseId } = useParams();
  const { token } = useAuth();
  const [databaseData, setDatabaseData] = useState<null | DatabaseInfo>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        method: "GET",
        endPoint: `/db/${databaseId}`,
        token: token as string,
        TokenInclude: true,
      });

      setDatabaseData(res.data);
    };

    getData();
  }, [databaseId, token]);

  if (databaseData === null) {
    return (
      <MainView className="flex justify-center items-center flex-1 w-full h-main">
        <Loader2 className="size-20 text-primary animate-spin" />
      </MainView>
    );
  }

  return (
    <MainView className="flex flex-1 w-full h-main">
      <TableAside dbId={databaseData.id} tables={databaseData.tables} />

      <section className=" w-full flex flex-col h-main overflow-hidden pb-2">
        <TableNav
          name={databaseData.name}
          size={databaseData.size}
          tableCount={databaseData.tableCount}
        />

        <Outlet context={{ databaseData }} />
      </section>
    </MainView>
  );
};

export default DBLayout;
