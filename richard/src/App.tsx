import React, { useState } from "react";

interface Todo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: Todo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    setTodos((prev: Todo[]) => {
      return prev.filter((todo: Todo, index: number) => {
        console.log("index", index);
        return index !== id;
      });
    });
  };
  return (
    <>
      <h1>todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">add todo</button>
      </form>
      <section>
        {todos.map((todo: Todo, index: number) => (
          <div key={index}>
            <div
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? "complete" : "inComplete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              remove
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
