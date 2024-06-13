import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

const MainView = (props: Props) => {
  return <main {...props}> {props.children} </main>;
};

export default MainView;
