import React, { Children, useEffect, useCallback } from "react";
import Block from "./block";
import { Container, Row } from "./styles";
import { createFullGrid } from "utils";
import { GRID } from "typings";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { createGrid } from "reducers";

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => {
    dispatch(createGrid());
  }, [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

  const grid: GRID = createFullGrid();
  console.log(grid);
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
