import React from "react";
import { PageLayout } from "../components";
import contacts from "../db/contacts";
import { Card } from "../components";

console.log(contacts);

const Contact = () => {
  return (
    <PageLayout>
      <h1>Contact Page</h1>

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

export default Contact;
