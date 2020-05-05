import styled, { css } from "styled-components";

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5rem;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1rem;
    `;
  }
};

export const Button = styled.button`
  color: white;
  background: ${({ secondary }) => (secondary ? "#30cfd0" : "#330867")};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  ${largeStyles}
  &:disabled {
    background: #eee;
    color: #666;
  }
`;
