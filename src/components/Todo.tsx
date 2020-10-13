import React, { useState } from "react";
import { Todo } from "../todo/index";
import { useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import UndoIcon from "@material-ui/icons/Undo";
import "./todo.style.css";

const TodoComponent = (props: any) => {
  const { todo } = props;
  const jwtToken = useSelector((state: any) => state.jwtToken);
  const [isEditing, setIsEditing] = useState(false);

  // To delete a todo
  const deleteTodo = (id: number) => {
    const todo = new Todo(
      jwtToken,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    todo.deleteTodo(id);
  };

  // To update the status
  const updateTodeStatus = (
    id: number,
    status: string,
    description: string
  ) => {
    const todo = new Todo(
      jwtToken,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    todo.updateTodoStatus(id, status, description);
  };

  // To update the Description
  const updateTodoDescription = (
    id: number,
    status: string,
    description: string,
    event: any
  ) => {
    if (event.key === "Enter") {
      const todo = new Todo(
        jwtToken,
        props.rerenderAppComponentState,
        props.rerenderAppComponentFunction
      );
      todo.updateTodoDescription(id, status, description);
    }
  };

  const doneOrUndoBtns =
    todo.status === "DONE" ? (
      <IconButton
        onClick={() =>
          updateTodeStatus(todo.id, "IN_PROGRESS", todo.description)
        }
      >
        <UndoIcon />
      </IconButton>
    ) : (
      <IconButton
        onClick={() => updateTodeStatus(todo.id, "DONE", todo.description)}
      >
        <DoneIcon />
      </IconButton>
    );

  const updateInputOrDescription = isEditing ? (
    <input
      type="text"
      placeholder="Add a todo"
      onKeyPress={(e: any) =>
        updateTodoDescription(todo.id, todo.status, e.target.value, e)
      }
    />
  ) : (
    <p>{todo.description}</p>
  );

  return (
    <>
      <div className="todoContainer" id={todo.id}>
        {doneOrUndoBtns}
        <div>
          {updateInputOrDescription}
          <IconButton onClick={() => setIsEditing(!isEditing)}>
            <EditIcon />
          </IconButton>
        </div>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
};

export default TodoComponent;
