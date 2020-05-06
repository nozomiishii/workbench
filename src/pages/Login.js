import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, PageLayout, Button, Spinner } from "../components";

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Layout = styled(PageLayout)`
  color: white;
  background: #50a3a2;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  width: 100%;
  height: 100%;
`;

const userIsRegistered = false;
let timeout;
export const Login = () => {
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    timeout = setTimeout(() => {
      setLogin(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <Layout>
      {login && <Spinner />}
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        {!userIsRegistered && (
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
          />
        )}

        <Button type="submit" disabled={login}>
          {userIsRegistered ? "Login" : "Resister"}
        </Button>
      </Form>
    </Layout>
  );
};
