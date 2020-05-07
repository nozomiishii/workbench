import styled from "styled-components";

export const Button = styled.button`
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #50a3a2;
  border-radius: 3px;
  width: 250px;
  font-size: 18px;
  &:disabled {
    background: #888;
    color: #666;
  }
  &:active {
    background: #888;
  }
`;
