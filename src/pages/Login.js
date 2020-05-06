import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, PageLayout, Button, Spinner } from "../components";

const Form = styled.form`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled(PageLayout)`
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
  background: #50a3a2;
  width: 100%;
  height: 100%;
`;

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
        <Input type="password" placeholder="Password" autoComplete="off" />
        <Button type="submit" disabled={login}>
          Login
        </Button>
      </Form>
    </Layout>
  );
};
