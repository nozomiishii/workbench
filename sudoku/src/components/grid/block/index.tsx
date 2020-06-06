import React from "react";
import { Container } from "./styles";
import { N } from "typings";
import { useSelector } from "react-redux";
import { IReducer } from "reducers";

interface Props {
  colIndex: number;
  rowIndex: number;
}

interface IState {
  value: N;
}

const Block: React.FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({}) => {});
  return <Container data-cy={`block-${rowIndex} - ${colIndex}`}>0</Container>;
};

export default Block;
