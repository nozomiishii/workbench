import React from "react";
import styled from "styled-components";

const Term = styled.div`
  text-align: center;
  max-width: 20rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 3px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 100ms ease-in-out;

  dt {
    color: #2ec2b0;
    line-height: 1;
    span {
      font-size: 200%;
      font-weight: 900;
    }
  }

  .emoji {
    margin: 0 auto 20px;
    display: block;
    font-size: 400%;
  }

  dd {
    font-size: 92.5%;
    margin-left: 0;
  }

  dd dt {
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
    font-size: inherit;
  }

  dd dl {
    font-size: 90%;
    margin: 1rem auto 0 auto;
    letter-spacing: 0.33px;
    max-width: 15rem;
  }

  dd dl .term {
    margin-bottom: 1rem;
  }
`;

export const Entry = ({ emoji, name, meaning }) => {
  return (
    <Term>
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emoji}
        </span>
        <span>{name}</span>
      </dt>
      <dd>{meaning}</dd>
    </Term>
  );
};
