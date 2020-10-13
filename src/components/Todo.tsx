import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import UndoIcon from "@material-ui/icons/Undo";
import "./todo.style.css";
import { Todo } from "../todo/index";
import { useSelector } from "react-redux";

const TodoComponent = (props: any) => {
  const { todo } = props;
  const jwtToken = useSelector((state: any) => state.jwtToken);
  const [isEditing, setIsEditing] = useState(false);

  const deleteTodo = (id: number) => {
    const todo = new Todo(
      jwtToken,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    todo.deleteTodo(id);
  };

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
  return (
    <>
      <div className="todoContainer" id={todo.id}>
        {todo.status === "DONE" ? (
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
        )}
        <div>
          {isEditing ? (
            <input
              type="text"
              placeholder="Add a todo"
              onKeyPress={(e: any) =>
                updateTodoDescription(todo.id, todo.status, e.target.value, e)
              }
            />
          ) : (
            <p>{todo.description}</p>
          )}

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
