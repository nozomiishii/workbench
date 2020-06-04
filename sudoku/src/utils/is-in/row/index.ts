import { GRID, NUMBERS } from "typings";

interface Input {
  grid: GRID;
  row: number;
  value: NUMBERS;
}

const isInRow = ({ grid, row, value }: Input): boolean => {
  return grid[row].includes(value);
};

export default isInRow;
