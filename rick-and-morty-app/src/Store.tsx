import React, { useReducer } from "react";
import { IState, IAction } from "./interfaces";

const intialState: IState = {
  episodes: [],
  favorites: [],
};
export const Store = React.createContext<IState | any>(intialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
