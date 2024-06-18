
type Props = {
  value: string;
};

export const Row = ({ value }: Props) => {
  return (
    <div className="py-1.5 h-[33px] px-4 w-60 flex shrink-0 items-center border-r border-b gap-2">
      <p className="text-sm font-medium line-clamp-1">{value} </p>
    </div>
  );
};
