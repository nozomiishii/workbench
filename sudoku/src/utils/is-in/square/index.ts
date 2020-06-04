import { SQUARE, NUMBERS } from "typings";

interface Input {
  square: SQUARE;
  value: NUMBERS;
}

const isInSquare = ({ square, value }: Input): boolean => {
  return [...square[0], ...square[1], ...square[2]].includes(value);
};

export default isInSquare;
