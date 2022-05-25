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
import TodoModal from "../TodoModal/TodoModal";
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="I acknowledge that I should stop the click event propagation"
            />
          </AccordionSummary>
          <AccordionDetails>Checkbox control on panel</AccordionDetails>
        </Accordion>
      </div>
    </Wrapper>
  );
};

export default MainWindow;
