import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    let uid = Math.random().toString();
    setTodos((prev) => [...prev, { id: uid, text }]);
    console.log(todos);
  };

  const deleteTodo = (todoId: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
