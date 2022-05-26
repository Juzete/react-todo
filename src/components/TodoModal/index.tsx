import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { boxStyles, FieldWrapper } from "./styles";
import { Divider, FormLabel, TextField } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";
import { addTodo, closeModal, editTodo } from "../../store/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface FormValues {
  todoName: string;
  todoDescription: string;
  todoColor: string;
}

const TodoModal = () => {
  const initialValues: FormValues = {
    todoName: "",
    todoDescription: "",
    todoColor: "",
  };

  const modalIsOpen = useSelector((state: RootState) => state.todo.modalIsOpen);
  const modalState = useSelector((state: RootState) => state.todo.modalState);
  const currentModalId = useSelector(
    (state: RootState) => state.todo.currentModalId
  );
  const [color, setColor] = useState("#aabbcc");
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      handleClose();
      if (modalState === "set") {
        dispatch(addTodo({ id: uuidv4(), ...values }));
        actions.resetForm({
          values: initialValues,
        });
      } else if (modalState === "edit") {
        console.log("edit modal");
        console.log(values, 111);
        const setExistVal = () => {
          let temp = {};
          const { todoColor, todoDescription, todoName } = values;
          if (todoColor) temp = { ...temp, todoColor };
          if (todoDescription) temp = { ...temp, todoDescription };
          if (todoName) temp = { ...temp, todoName };
          return temp;
        };
        const val = setExistVal();
        console.log({ val });
        dispatch(editTodo({ id: currentModalId, ...val }));
        actions.resetForm({
          values: initialValues,
        });
      }
    },
  });

  useEffect(() => {
    formik.values.todoColor = color;
  }, [color]);

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyles}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            mb="20px"
          >
            TODO INFO
          </Typography>
          <Divider sx={{ mb: 5 }} />
          <form onSubmit={formik.handleSubmit}>
            <FieldWrapper>
              <FormLabel htmlFor="todoName">Todo Name</FormLabel>
              <TextField
                id="todoName"
                name="todoName"
                label="Todo Name"
                variant="outlined"
                value={formik.values.todoName}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="todoDescription">Todo Description</FormLabel>
              <TextField
                id="todoDescription"
                label="Todo Description"
                name="todoDescription"
                variant="outlined"
                value={formik.values.todoDescription}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel>Todo Color</FormLabel>
              <HexColorPicker
                color={color}
                onChange={setColor}
                style={{ height: 150, width: 210 }}
              />
            </FieldWrapper>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ ml: 38 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TodoModal;
