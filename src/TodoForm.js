import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";
const TodoForm = () => {
  const [value, handleChange, reset] = useInputState("");
  // Consumet Subscribe to the Provider to get what he need, in this case addTodo
  const dispatch = useContext(TodosContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new Todo"
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
};

export default TodoForm;
