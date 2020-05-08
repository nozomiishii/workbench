import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);

  input,
  textarea {
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }
  button {
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
  }
`;

export const CreateMemo = (props) => {
  const [memo, setMemo] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMemo(memo);
    setMemo({ title: "", content: "" });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={memo.title}
      />
      <textarea
        onChange={handleChange}
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={memo.content}
      />
      <button type="submit">Add</button>
    </Form>
  );
};
