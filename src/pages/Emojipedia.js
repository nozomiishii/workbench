// import React, { useState } from "react";
import React from "react";
import { PageLayout, Entry } from "../components";
import { emojipedia } from "../db/emojipedia";
import styled from "styled-components";

const Layout = styled(PageLayout)`
  font-weight: 400;
  line-height: 1.666;
  background: #c0d2d4;
  color: #555;
  h1 {
    font-weight: 900;
    font-size: 500%;
    text-align: center;
    margin-top: 4rem;
    color: #fff;
    line-height: 1.2;
  }
  h1 span {
    padding: 5px 15px;
    background: #2ec2b0;
  }
`;

const Dictionary = styled.dl`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 90%;
`;

export const Emojipedia = () => {
  const entris = emojipedia.map(({ id, emoji, name, meaning }) => {
    return <Entry key={id} emoji={emoji} name={name} meaning={meaning} />;
  });

  return (
    <Layout>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Dictionary>{entris}</Dictionary>
    </Layout>
  );
};
