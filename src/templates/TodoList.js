import React, { useState } from "react";
import styled from "styled-components";
import { AppLayout } from "../components";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
`;

const Form = styled.form`
  input {
    box-sizing: border-box;
    background-color: transparent;
    padding: 0.7rem;
    border-bottom-right-radius: 15px 3px;
    border-bottom-left-radius: 3px 15px;
    border: solid 3px transparent;
    border-bottom: dashed 3px #fdcb6e;
    font-family: "Architects Daughter", cursive;
    font-size: 1rem;
    color: hsla(260, 2%, 25%, 0.7);
    width: 70%;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 0;
  border: none;
  font-family: "Architects Daughter", cursive;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  background-color: #ffeaa7;
  span {
    background: #f1f5f8;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid hsl(198, 1%, 29%);
  }
`;

const Li = styled.li`
  text-align: left;
  position: relative;
  padding: 0.5rem;
`;

export const TodoList = () => {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState("");

  const handleChagne = (e) => {
    const item = e.target.value;
    setList(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLists((prev) => [...prev, list]);

    setList("");
  };

  return (
    <AppLayout title="To-Do List">
      <Container>
        <Form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChagne} value={list} />
          <Button type="submit">
            <span>Add</span>
          </Button>
        </Form>
        <div>
          <ul>{lists && lists.map((list) => <Li key={list}>{list}</Li>)}</ul>
        </div>
      </Container>
    </AppLayout>
  );
};
