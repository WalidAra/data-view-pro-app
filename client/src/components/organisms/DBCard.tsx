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

type DBCardProps = {
  title: string;
  type: "SQL" | "NoSQL";
  date: string;
  description: string;
  tableCount: number;
  size: string;
  name: "PostgreSQL" | "MySQL" | "MongoDB";
};

const DBCard = ({
  title,
  type,
  date,
  description,
  tableCount,
  size,
  name,
}: DBCardProps) => {
  const IconComponent = dbs[name];
  return (
    <Card className="sm:w-80 w-full p-4 flex flex-col justify-between gap-2 ">
      <CardHeader className="p-0 flex flex-col gap-1.5">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Chip type={type} isdate={false} text={type} />{" "}
          <Chip text={date} isdate />
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-sm text-muted-foreground line-clamp-2 flex flex-col gap-3">
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

          {IconComponent && <IconComponent className="size-5 " />}
        </div>
        <Button size={"sm"} variant={"outline"}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DBCard;
