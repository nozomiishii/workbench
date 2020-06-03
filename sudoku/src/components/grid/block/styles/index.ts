import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-size: 20px;
    font-weight: bold;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: "";
      float: left;
    }
    &:hover {
      background: ${theme.colors.lightBlue};
    }
  `}
`;
