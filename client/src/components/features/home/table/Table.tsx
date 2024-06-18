/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */

import { DatabaseInfo } from "@/types";
import Columns from "./components/Columns";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useFetch } from "@/hooks/useFetch";
import { Loader2 } from "lucide-react";
import { Row } from "./components/Row";

type ContextType = {
  databaseData: DatabaseInfo;
};

type ResProps = {
  columns: string[];
  rows: any[];
};

const Table = () => {
  const { token } = useAuth();
  const { databaseData } = useOutletContext<ContextType>();
  const { tableName } = useParams();
  const [tableData, setTableData] = useState<null | ResProps>(null);

  useEffect(() => {
    const getData = async () => {
      setTableData(null);
      const res = await useFetch({
        method: "POST",
        endPoint: `/db/${databaseData.id}/table`,
        body: { tableName },
        token: token as string,
        TokenInclude: true,
      });

      if (res.status) {
        setTableData(res.data);
      }
    };

    getData();
  }, [databaseData.id, tableName, token]);

  if (tableData === null) {
    return (
      <div className="w-full h-table flex flex-col justify-center items-center">
        <Loader2 className="size-20 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-table flex flex-col overflow-auto">
      <Columns cols={tableData.columns} />
      {/* <RowAtt /> */}
      <div className="w-full flex ">
        {tableData.rows.map((value: any) => (
          <div className="w-60 flex shrink-0">
            <div className="flex flex-col w-full">
              {value.map((v: string) => (
                <Row value={v} key={v} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
