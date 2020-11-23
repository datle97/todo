import {
  ADD_TODO,
  CHECK_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SELECT_TODO,
  UNSELECT_TODO,
} from "./types";

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  newTodo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  id,
});

export const selectTodo = (id) => ({
  type: SELECT_TODO,
  id,
});

export const unselectTodo = () => ({
  type: UNSELECT_TODO,
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  id,
  newText,
});
