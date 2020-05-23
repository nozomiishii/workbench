import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).send({ message: "created the todo", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.send({ todos: TODOS });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;
};
