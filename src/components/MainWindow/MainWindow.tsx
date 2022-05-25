import { Button, Typography } from "@mui/material";
import TodoModal from "../TodoModal/TodoModal";
import { Title, Wrapper } from "./styles";

const MainWindow = () => {
  return (
    <Wrapper>
      <Title>
        <Typography variant="h2" color={"#1976d2"}>
          ToDo List
        </Typography>
      </Title>
      <TodoModal />
    </Wrapper>
  );
};

export default MainWindow;
