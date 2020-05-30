import React, { useState } from "react";
import { Toggle } from "./partials/Toggle";
import { List } from "./partials/List";
import { Item } from "./partials/Item";
import { DropDownContext } from "./partials/DropDownContext";

export const DropDown: React.FC & {
  Toggle: typeof Toggle;
  List: typeof List;
  Item: typeof Item;
} = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <DropDownContext.Provider value={isShown}>
      {children}
    </DropDownContext.Provider>
  );
};

DropDown.Toggle = Toggle;
DropDown.List = List;
DropDown.Item = Item;
