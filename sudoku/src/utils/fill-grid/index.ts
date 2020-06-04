import { GRID, NUMBERS } from "typings";
import shuffle from "utils/shuffle";
import { isInRow, isInCol } from "utils/is-in";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param grid 9x9 sudoku grid
 */
const fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;
    if (grid[row][col] === 0) {
      shuffle(numbers);
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0],
            ];
            grid[row][col] = value;
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
};

export default fillGrid;
