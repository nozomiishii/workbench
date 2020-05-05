import React, { useState, useEffect } from "react";
import { PageLayout, Input, PasswordInput, Button, Spinner } from "../common";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  color: black;
  border-radius: 4px;
  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;
const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    e.persist();
    setFormFields((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
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
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? "loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Resister{" "}
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
