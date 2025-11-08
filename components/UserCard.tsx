import { FC } from "react";
import { UserCardProps } from "@/types/propTypes";

const UserCard: FC<UserCardProps> = ({ children, name, role = "student" }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      {children}
    </div>
  );
};

export default UserCard;
