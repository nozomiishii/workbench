import React from "react";
import { Container } from "./styles";

interface Props {
  colIndex: number;
  rowIndex: number;
}

const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  return <Container data-cy={`block-${rowIndex} - ${colIndex}`}>0</Container>;
};

export default Block;
