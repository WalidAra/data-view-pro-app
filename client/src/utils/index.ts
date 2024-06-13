import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

type IconType = React.FC<{ className?: string }>;

export const dbs: Record<string, IconType> = {
  PostgreSQL: BiLogoPostgresql,
  MySQL: TbBrandMysql,
  MongoDB: SiMongodb,
};

