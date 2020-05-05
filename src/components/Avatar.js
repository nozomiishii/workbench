import React from "react";
import styled from "styled-components";

const Img = styled.img`
  margin: 30px 20px 0 0;
  border-radius: 50%;
  border: 7px solid #fff;
  width: 120px;
  height: 120px;
`;

export const Avatar = (props) => {
  return <Img src={props.imgURL} alt="profile" className="circle-img" />;
};
