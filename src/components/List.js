import React, { useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem;
`;

export const List = ({ text }) => {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone((s) => !s);
  };

  return (
    <Li
      onClick={handleClick}
      style={{ textDecoration: done && "line-through" }}
    >
      {text}
    </Li>
  );
};
