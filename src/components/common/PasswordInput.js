// import React, { useState } from "react";
import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PasswordInputStyled = styled(Input)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const PasswordInput = (props) => {
  // const [showPassword, setShowPassword] = useState(false);
  return <PasswordInputStyled {...props} />;
};
