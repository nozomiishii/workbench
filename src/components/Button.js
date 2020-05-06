import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background: #9adf66;
  width: 100%;
  display: block;
  &:disabled {
    background: #eee;
    color: #666;
  }
`;
