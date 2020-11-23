import {
  ADD_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  SELECT_TODO,
  UNSELECT_TODO,
  EDIT_TODO,
} from "../actions/types";
import { v1 as uuid } from "uuid";

const initialState = {
  todoList: [
    { id: uuid(), text: "Learn the MERN stack", checked: true },
    { id: uuid(), text: "Build a TMDb Clone", checked: true },
    { id: uuid(), text: "Find a job", checked: false },
  ],
  editId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [action.newTodo, ...state.todoList] };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo.id !== action.id)],
      };
    case CHECK_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.id
              ? { ...todo, checked: !todo.checked }
              : { ...todo }
          ),
        ],
      };
    case SELECT_TODO:
      return {
        ...state,
        editId: action.id,
      };
    case UNSELECT_TODO:
      return {
        ...state,
        editId: null,
      };
    case EDIT_TODO: {
      const newTodoList = [...state.todoList];
      const index = newTodoList.findIndex((todo) => todo.id === action.id);
      newTodoList[index].text = action.newText;

      return { ...state, todoList: newTodoList };
    }
    default:
      return state;
  }
};

export default reducer;
