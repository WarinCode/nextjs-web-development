import { FC } from "react";
import { HelloProps } from "@/types/propTypes";

const Hello: FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>Age {age}</h1>
    </div>
  );
};

export default Hello;
