import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import { todoContext } from "../../context/todoConrext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  // console.log(oneTodo);

  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);

  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
    console.log(editedTodo);
  }

  return (
    <Container>
      {oneTodo ? (
        <Box>
          <TextField
            value={todo}
            onChange={e => setTodo(e.target.value)}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Button onClick={handleSave} variant="outlined">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loader...</h2>
      )}
    </Container>
  );
};

export default Edit;
