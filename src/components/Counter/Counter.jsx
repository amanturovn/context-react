import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { counterContext } from "../../context/counterCounter";

const Counter = () => {
  const { counter, decrement, increment } = useContext(counterContext);

  return (
    <div>
      <IconButton
        onClick={() => decrement()}
        aria-label="delete"
        color="primary">
        <RemoveRoundedIcon />
      </IconButton>
      <span>{counter}</span>
      <IconButton
        onClick={() => increment()}
        aria-label="delete"
        color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
