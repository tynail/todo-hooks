import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
const defaultTodo = [
  { id: 1, task: "Do more Programmation", completed: false },
  { id: 3, task: "Do more Exercice", completed: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodo);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
// { todos, addTodo, removeTodo, toggleTodo, editTodo }
