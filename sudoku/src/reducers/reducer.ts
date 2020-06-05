import { AnyAction } from "redux";
import { IReducer } from "./interfaces";
import * as types from "./types";
import { createFullGrid } from "utils";

const initialState: IReducer = {};

const reducer = (state = initialState, action: AnyAction): IReducer => {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      };
    default:
      return state;
  }
};

export default reducer;
