import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;
  `}
`;
