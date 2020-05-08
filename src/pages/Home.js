import React, { useState } from "react";
import styled from "styled-components";
import { PageLayout, Note, CreateMemo } from "../components";
import { notes as noteData } from "../db";

const Notes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  > * {
    margin: 5px;
  }
`;

export const Home = () => {
  const [memos, setMemos] = useState([...noteData]);

  const addMemo = (memo) => {
    setMemos((prev) => [...prev, memo]);
  };

  const notes = memos.map(({ title, content }, index) => (
    <Note key={index} title={title} memo={content} />
  ));
  return (
    <PageLayout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit optio
        quod excepturi voluptatum, a repellendus cumque ab debitis consectetur
        quis quaerat nam accusamus eligendi doloribus eius culpa reiciendis aut
        dolorem? Est, architecto? Natus beatae tenetur deleniti assumenda
        voluptas accusantium error nulla iste animi consequuntur. Necessitatibus
        sapiente voluptatum obcaecati quaerat!
      </p>
      <CreateMemo addMemo={addMemo} />
      <Notes>{notes}</Notes>
    </PageLayout>
  );
};
