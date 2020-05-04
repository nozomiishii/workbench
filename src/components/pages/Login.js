import React, { useState } from "react";
import { PageLayout, Input, PasswordInput } from "../common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    e.persist();
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          value={formFields.username}
          onChange={handleInput}
          type="text"
        />
        <PasswordInput
          name="password"
          value={formFields.password}
          onChange={handleInput}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
