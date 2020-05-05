import React from "react";
import styled from "styled-components";
import { Avatar } from "./Avatar";

const Wrapper = styled.div`
  border-radius: 25px;
  position: relative;
  padding: 25px 15px;
  background-color: #81ecec;
  margin: 50px 0;
  height: 220px;
  box-shadow: 0 2px 5px #ccc;
  text-align: left;
  max-width: 400px;
  min-width: 400px;
  margin: 0 auto;
  padding: 25px;
  .top {
    border-radius: 25px 25px 0 0;
    height: 100px;
    width: 100%;
    background-color: #00cec9;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }

  .name {
    font-size: 2em;
    color: #2d3436;
    display: flex;
    flex: 1;
    margin: 10% 20px 0;
  }

  .bottom {
    margin-top: 120px;
    p {
      margin: 20px 0;
      color: #1a7e76;
    }
  }
`;

export const Card = ({ name, imgURL, phone, email }) => {
  return (
    <Wrapper>
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar imgURL={imgURL} />
      </div>
      <div className="bottom">
        <p className="info">{phone}</p>
        <p className="info">{email}</p>
      </div>
    </Wrapper>
  );
};
