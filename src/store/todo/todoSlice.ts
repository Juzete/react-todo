import { createSlice } from "@reduxjs/toolkit";

export interface TodoItem {
  id: string;
  todoName: string;
  todoDescription: string;
  todoColor: string;
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
    deleteTodo: (state: TodoState, action: any) => {
      state.todoList = state.todoList.filter(
        (item) => action.payload.indexOf(item.id) === -1
      );
    },
  },
});

export const { addTodo, openModal, closeModal, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
