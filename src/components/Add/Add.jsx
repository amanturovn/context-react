import { Box, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { todoContext } from "../../context/todoConrext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { creatTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  function handleSave() {
    let newTodo = {
      todo,
    };
    creatTodo(newTodo);
    navigate("/list");

    console.log(newTodo);
  }
  return (
    <Box>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="Outlined"
        variant="outlined"
      />
      <Button onClick={() => handleSave()} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default Add;
