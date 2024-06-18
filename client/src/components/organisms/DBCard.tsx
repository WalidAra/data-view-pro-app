import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/cli/ui/card";
import Chip from "../atoms/Chip";
import { Button } from "../cli/ui/button";
import { LuTable2, LuDatabase } from "react-icons/lu";
import { dbs } from "@/utils";
import { Database } from "@/types";
import { Link } from "react-router-dom";

type DBCardProps = {
  db: Database;
};

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = ("0" + date.getUTCDate()).slice(-2); // Add leading zero if necessary
  const month = ("0" + (date.getUTCMonth() + 1)).slice(-2); // Months are zero-indexed
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

const DBCard = ({ db }: DBCardProps) => {
  const {description , createdAt , id , name , size , tableCount, title , type } = db;

  const IconComponent = dbs[name];
  return (
    <Card className="sm:w-80 w-full p-4 flex flex-col justify-between gap-2 ">
      <CardHeader className="p-0 flex flex-col gap-1.5">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Chip type={type} isdate={false} text={type} />{" "}
          <Chip text={formatDate(createdAt)} isdate />
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground line-clamp-2 w-full flex flex-col gap-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-0 flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-1 font-medium">
            <LuTable2 className="size-4" />
            <p>{tableCount}</p>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <LuDatabase className="size-4" />
            <p>{size}</p>
          </div>

          {IconComponent && <IconComponent className="size-5 text-primary" />}
        </div>
        <Link to={`/dashboard/${id}`}>
          <Button size={"sm"} variant={"outline"}>
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DBCard;
