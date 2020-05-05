import React from "react";
import { PageLayout, Note } from "../components";
import styled from "styled-components";

const Notes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  > * {
    margin: 5px;
  }
`;

const Home = () => {
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
      <Notes>
        <Note
          title="note"
          memo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          rem."
        />
        <Note />
      </Notes>
    </PageLayout>
  );
};

export default Home;
