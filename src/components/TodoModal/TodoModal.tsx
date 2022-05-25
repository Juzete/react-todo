import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { boxStyles, FieldWrapper } from "./styles";
import { FormLabel, TextField } from "@mui/material";
import { HexColorPicker } from "react-colorful";

interface FormValues {
  todoName: string;
  todoDescription: string;
  todoColor: string;
}

const TodoModal = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#aabbcc");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: FormValues = {
    todoName: "",
    todoDescription: "",
    todoColor: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleClose();
    },
  });

  useEffect(() => {
    formik.values.todoColor = color;
  }, [color]);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add Todo
      </Button>
      <Modal
        open={open}
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
