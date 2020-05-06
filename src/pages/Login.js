import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageLayout, Spinner, Form } from "../components";

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
      <h1>Hello!!</h1>
      {login && <Spinner />}
      <Form
        handleSubmit={handleSubmit}
        userIsRegistered={userIsRegistered}
        login={login}
      />
    </Layout>
  );
};
