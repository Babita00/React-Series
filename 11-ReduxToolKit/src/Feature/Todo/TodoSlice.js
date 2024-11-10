import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [{ id: 1, text: "Hello", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTOdo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    //update
    updateTodo: (state, action) => {
      const { id, updateData } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updateData } : { todo }
      );
    },
  },
});
