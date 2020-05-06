import React from "react";
import styled from "styled-components";
import { Input, Button } from "../components";

const Div = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Form = (props) => {
  return (
    <Div onSubmit={props.handleSubmit}>
      <Input type="text" placeholder="Username" />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="off"
      />
      {!props.userIsRegistered && (
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
        />
      )}

      <Button type="submit" disabled={props.login}>
        {props.userIsRegistered ? "Login" : "Resister"}
      </Button>
    </Div>
  );
};
