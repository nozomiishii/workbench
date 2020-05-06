import React from "react";
import styled from "styled-components";
import { PageLayout, Note } from "../components";
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
  const notes = noteData.map(({ key, title, content }) => (
    <Note key={key} title={title} memo={content} />
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
      <Notes>{notes}</Notes>
    </PageLayout>
  );
};
