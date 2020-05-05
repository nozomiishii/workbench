import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputWapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "password",
  autoComplete: "on",
}))`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  padding: 8px;
  display: flex;
  user-select: none;
  border-left: 0;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
`;

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <PasswordInputWapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword((state) => !state)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWapper>
      {showPassword && <div>{props.value}</div>}
    </>
  );
};
