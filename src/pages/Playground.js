import React from "react";
import { PageLayout } from "../components";
import { Counter, CurrentTimer } from "../templates";

export const Playground = () => {
  return (
    <PageLayout>
      <h1>Playground</h1>
      <CurrentTimer />
      <Counter />
    </PageLayout>
  );
};
