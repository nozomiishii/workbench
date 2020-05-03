import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: black;
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
