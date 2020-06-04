import { GRID, NUMBERS } from "typings";

interface Input {
  col: number;
  grid: GRID;
  value: NUMBERS;
}

const isInCol = ({ col, grid, value }: Input): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
};

export default isInCol;
