import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: any) => {
      state.todoList.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
