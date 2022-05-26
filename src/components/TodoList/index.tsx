import { ExpandMore, PriorityHigh } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  openModal,
  setCurrentModalId,
  TodoItem,
} from "../../store/todo/todoSlice";
import { EditButtonWrapper } from "./styles";

type TodoListProps = {
  setIsChecked: (prev: any) => void;
};

const TodoList: React.FC<TodoListProps> = ({ setIsChecked }) => {
  const dataList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleCheckbox = () => (e: any) => {
    if (e.target?.checked) {
      setIsChecked((prevState: any) => [...prevState, e.target.id]);
    } else {
      setIsChecked((prevState: any) =>
        prevState.filter((item: any) => item !== e.target.id)
      );
    }
  };
  const handleEditClick = () => (e: any) => {
    dispatch(openModal("edit"));
    dispatch(setCurrentModalId(e.target.id));
  };

  const printList = () => {
    return dataList.map((item: TodoItem) => {
      return (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label={item.todoName}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox onChange={handleCheckbox()} id={item.id} />}
              label={item.todoName.toUpperCase()}
            />
            <PriorityHigh sx={{ ml: "auto", mt: 1, color: item.todoColor }} />
          </AccordionSummary>
          <AccordionDetails sx={{ fontFamily: "roboto" }}>
            {item.todoDescription}
          </AccordionDetails>
          <EditButtonWrapper>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleEditClick()}
              id={item.id}
            >
              Edit
            </Button>
          </EditButtonWrapper>
        </Accordion>
      );
    });
  };

  return <div>{printList()}</div>;
};

export default TodoList;
