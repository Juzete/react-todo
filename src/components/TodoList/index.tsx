import { ExpandMore, PriorityHigh } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TodoItem } from "../../store/todo/todoSlice";

const TodoList = () => {
  const dataList = useSelector((state: RootState) => state.todo.todoList);

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
              control={<Checkbox />}
              label={item.todoName.toUpperCase()}
            />
            <PriorityHigh sx={{ ml: "auto", mt: 1, color: item.todoColor }} />
          </AccordionSummary>
          <AccordionDetails sx={{ fontFamily: "roboto" }}>
            {item.todoDescription}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{printList()}</div>;
};

export default TodoList;
