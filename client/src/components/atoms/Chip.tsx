import { cn } from "@/lib/utils";

type Props = {
  isdate: boolean;
  text: string;
  type?: string;
};

import { FaRegCalendarDays } from "react-icons/fa6";

const Chip = ({ isdate, text, type }: Props) => {
  return (
    <div
      className={cn(
        "rounded-2xl px-2.5 py-0.5 font-medium border-2 ",
        isdate
          ? "text-purple-500 border-purple-500 bg-purple-500/20 flex items-center gap-2"
          : !isdate && type === "SQL"
          ? "text-blue-500 border-blue-500 bg-blue-500/20"
          : "text-green-500 border-green-500 bg-green-500/20"
      )}
    >
      {isdate && <FaRegCalendarDays className="w-4 h-4" />}
      {text}
    </div>
  );
};

export default Chip;
