import { MdKey } from "react-icons/md";

type Props = {
  isId: boolean;
  col: string;
};

export default function Column({ isId, col }: Props) {
  return (
    <div className="bg-muted py-1.5 px-4 w-60 flex shrink-0 items-center border-r border-b gap-2">
      <span className="text-sm font-medium">{col} </span>
      {isId && <MdKey className="size-5 text-muted-foreground" />}
    </div>
  );
}
