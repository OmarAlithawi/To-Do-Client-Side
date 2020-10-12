import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import "./todo.style.css";

const Todo = () => {
  return (
    <>
      <div className="todoContainer">
        <IconButton>
          <DoneIcon />
        </IconButton>
        <p>finish this website and then refactor it</p>

        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Todo;
