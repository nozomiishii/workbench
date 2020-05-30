import { createContext } from "vm";

interface DropDown {
  isShown?: boolean;
}

export const DropDownContext = createContext({} as DropDown);
