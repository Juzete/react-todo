import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { deleteTodo, openModal } from "../../store/todo/todoSlice";
import AlertDialog from "../AlertDialog";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";
import { Title, Wrapper } from "./styles";

const MainWindow = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<string[]>([]);
  const dataList = useSelector((state: RootState) => state.todo.todoList);

  const handleOpenModal = () => dispatch(openModal("set"));
  const handleDeleteTodo = () => dispatch(deleteTodo(isChecked));

  return (
    <Wrapper>
      <Title>
        <Typography variant="h2" color={"#1976d2"}>
          ToDo List
        </Typography>
      </Title>
      <div>
        <Button variant="contained" onClick={handleOpenModal} sx={{ mr: 3 }}>
          Add todo
        </Button>
        {dataList.length > 0 && isChecked.length > 0 ? (
          <AlertDialog handleDeleteTodo={handleDeleteTodo} />
        ) : null}
      </div>
      <TodoModal />
      <div style={{ width: "100%", marginTop: "20px" }}>
        <TodoList setIsChecked={setIsChecked} />
      </div>
    </Wrapper>
  );
};

export default MainWindow;
