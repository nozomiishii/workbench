import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UseRef = () => {
  const [counter, setCounter] = useState(0); //#1
  const prevCounter = useRef(); //#2

  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  return (
    <Container>
      <button onClick={() => setCounter(Math.floor(Math.random() * 10))}>
        click Me
      </button>
      <h1>count: {counter}</h1>
      {typeof prevCounter.current !== "undefined" && (
        <h2>Previous: {prevCounter.current}</h2>
      )}
    </Container>
  );
};

export default UseRef;
