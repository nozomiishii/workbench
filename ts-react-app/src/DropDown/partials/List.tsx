import React, { useContext } from "react";
import { DropDownContext } from "./DropDownContext";

export const List: React.FC = ({ children }) => {
  const { isShown } = useContext(DropDownContext);
  console.log(isShown);
  return <div>{children}</div>;
};
