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
  modalState: string;
  currentModalId: string;
}

const initialState: TodoState = {
  todoList: [],
  modalIsOpen: false,
  modalState: "",
  currentModalId: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: any) => {
      state.todoList.push(action.payload);
    },
    openModal: (state: TodoState, action: any) => {
      state.modalIsOpen = true;
      state.modalState = action.payload;
    },
    closeModal: (state: TodoState) => {
      state.modalIsOpen = false;
      state.modalState = "";
      state.currentModalId = "";
    },
    deleteTodo: (state: TodoState, action: any) => {
      state.todoList = state.todoList.filter(
        (item) => action.payload.indexOf(item.id) === -1
      );
    },
    editTodo: (state: TodoState, action: any) => {
      const todoIndex = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[todoIndex] = {
        ...state.todoList[todoIndex],
        ...action.payload,
      };
    },
    setCurrentModalId: (state: TodoState, action: any) => {
      state.currentModalId = action.payload;
    },
  },
});

export const {
  addTodo,
  openModal,
  closeModal,
  deleteTodo,
  editTodo,
  setCurrentModalId,
} = todoSlice.actions;

export default todoSlice.reducer;
