import React from "react";
import styled from "styled-components";
import { Input, PageLayout, Button } from "../components";

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

export const Login = () => {
  return (
    <Layout>
      <Form>
        <Input />
        <Input />
        <Button>Login</Button>
      </Form>
    </Layout>
  );
};
