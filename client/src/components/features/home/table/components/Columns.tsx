import Column from "./Column";

const Columns = () => {
  return (
    <div className="w-full flex ">
      <Column col="ID" isId />
      <Column col="username" isId={false} />
      <Column col="email" isId={false} />
      <Column col="password" isId={false} />
      <Column col="first name" isId={false} />
      <Column col="last name" isId={false} />
      <Column col="bio" isId={false} />
      <Column col="isBanned" isId={false} />
    </div>
  );
};

export default Columns;
