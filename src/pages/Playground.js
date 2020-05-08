import React from "react";
import { PageLayout } from "../components";
import { Counter, TodoList } from "../templates";

export const Playground = () => {
  return (
    <PageLayout>
      <h1>Playground</h1>
      <TodoList />
      <Counter />
    </PageLayout>
  );
};
