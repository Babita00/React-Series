import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [{ id: 1, text: "Hello", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {},
    removeTOdo: () => {},
  },
});
