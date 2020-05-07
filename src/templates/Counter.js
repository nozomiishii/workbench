import React, { useState } from "react";
import styled from "styled-components";
import { AppLayout } from "../components";

const Btn = styled.button`
  width: 120px;
  height: 80px;
`;

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <AppLayout title="Counter">
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <Btn onClick={() => setCount((s) => s + 1)}>+</Btn>
        <Btn onClick={() => setCount((s) => s - 1)}>-</Btn>
      </div>
    </AppLayout>
  );
};
