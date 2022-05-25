import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/todo/todoSlice";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";
import { Title, Wrapper } from "./styles";

const MainWindow = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => dispatch(openModal());

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
      </div>

      <TodoModal />
      <div style={{ width: "100%", marginTop: "20px" }}>
        <TodoList />
      </div>
    </Wrapper>
  );
};

export default MainWindow;
