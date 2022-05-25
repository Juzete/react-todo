import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, openModal } from "../../store/todo/todoSlice";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";
import { Title, Wrapper } from "./styles";

const MainWindow = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<string[]>([]);

  const handleOpenModal = () => dispatch(openModal());
  const handleDeleteTodo = () => dispatch(deleteTodo(isChecked));

  return (
    <Wrapper>
      <Title>
        <Typography variant="h2" color={"#1976d2"}>
          ToDo List
        </Typography>
      </Title>
      <div>
        <Button variant="contained" onClick={handleOpenModal}>
          Add todo
        </Button>
        <Button variant="contained" onClick={handleDeleteTodo} color="error">
          Delete
        </Button>
      </div>
      <TodoModal />
      <div style={{ width: "100%", marginTop: "20px" }}>
        <TodoList setIsChecked={setIsChecked} />
      </div>
    </Wrapper>
  );
};

export default MainWindow;
