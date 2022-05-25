import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface TodoState {
  todoList: TodoItem[];
  modalIsOpen: boolean;
}

const initialState: TodoState = {
  todoList: [],
  modalIsOpen: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: any) => {
      state.todoList.push(action.payload);
    },
    openModal: (state: TodoState) => {
      state.modalIsOpen = true;
    },
    closeModal: (state: TodoState) => {
      state.modalIsOpen = false;
    },
  },
});

export const { addTodo, openModal, closeModal } = todoSlice.actions;

export default todoSlice.reducer;
