import React from "react";
import { contacts, profile } from "../db";
import { PageLayout, Card, Avatar } from "../components";
import styled from "styled-components";

// console.log(contacts);

const Header = styled.div`
  text-align: center;
`;

// const str = "1";

// console.log(+str);

export const Contact = () => {
  return (
    <PageLayout>
      <Header>
        <h1>Contact Page</h1>
        <Avatar imgURL={profile.url} crossOrigin="anonymous" />
      </Header>
      {contacts.map(({ name, imgURL, phone, email }) => {
        return (
          <Card
            key={`${name}${imgURL}`}
            name={name}
            imgURL={imgURL}
            phone={phone}
            email={email}
          />
        );
      })}
    </PageLayout>
  );
};
