import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

type IconType = React.FC<{ className?: string }>;

export const dbs: Record<string, IconType> = {
  PostgreSQL: BiLogoPostgresql,
  MySQL: TbBrandMysql,
  MongoDB: SiMongodb,
};


export const defaultPic = "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg"