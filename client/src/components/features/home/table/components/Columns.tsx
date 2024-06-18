/* eslint-disable @typescript-eslint/no-unused-vars */
import Column from "./Column";

type Props = {
  cols:string[]
}

const Columns = ({cols}: Props) => {
  return (
    <div className="w-full flex ">
      {cols.map((c) => (
        <Column col={c} key={c} isId={false} />
      ))}
    </div>
  );
};

export default Columns;
