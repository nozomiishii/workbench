import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 0 auto;
  width: 60%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 5vw;
  > * {
    margin: 5px;
    padding: 10px;
  }
`;

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("todo");
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <p>Please Login</p>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button>Login</button>
    </StyledForm>
  );
};
