import React from "react";
import styled from "styled-components";
import { Avatar } from "./Avatar";

const Wrapper = styled.div`
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
  background-color: #81ecec;
  margin: 50px auto;
  height: 220px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
  max-width: 400px;
  min-width: 400px;

  .bottom {
    margin-top: 120px;
    p {
      margin: 20px 0;
      color: #1a7e76;
    }
  }
`;

const Top = styled.div`
  border-radius: 25px 25px 0 0;
  height: 100px;
  width: 100%;
  background-color: #00cec9;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  h2 {
    font-size: 2em;
    color: #2d3436;
    display: flex;
    flex: 1;
    margin: 10% 20px 0;
  }
`;

export const Card = ({ name, imgURL, phone, email }) => {
  return (
    <Wrapper>
      <Top>
        <h2>{name}</h2>
        <Avatar imgURL={imgURL} />
      </Top>
      <div className="bottom">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </Wrapper>
  );
};
