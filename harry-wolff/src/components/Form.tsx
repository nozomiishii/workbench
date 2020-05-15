import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  width: 60%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 5vw;
  > * {
    margin: 5px;
    padding: 10px;
  }
`;

export const Form = () => {
  return (
    <StyledForm>
      <p>Please Login</p>
      <input type="text" placeholder="username" />
      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
      />
      <button>Login</button>
    </StyledForm>
  );
};
