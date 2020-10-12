import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import "./todo.style.css";

const Todo = (props: any) => {
  const { todo } = props;
  return (
    <>
      <div className="todoContainer" id={todo.id}>
        <IconButton>
          <DoneIcon />
        </IconButton>
        <div>
          <p>{todo.description}</p>
          <IconButton>
            <EditIcon />
          </IconButton>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Todo;
