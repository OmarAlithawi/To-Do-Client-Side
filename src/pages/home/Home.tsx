import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../auth/auth";
import TodoComponent from "../../components/Todo";
import { Todo } from "../../todo/index";
import { Button, Container } from "@material-ui/core";
import { getTodoes } from "../../redux/actions";
import "./home.style.css";

const Home = (props: any) => {
  const username = useSelector((state: any) => state.username);
  const jwtToken = useSelector((state: any) => state.jwtToken);
  const todoes = useSelector((state: any) => state.todoes);
  const [todoStatus, setTodoStatus] = useState("IN_PROGRESS");
  const dispatch = useDispatch();
  const { history } = props;

  const getInProgressTodoes = async (status: string) => {
    const todo = new Todo(
      jwtToken,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    const todoes = await todo.getTodo(status);
    dispatch(getTodoes(todoes));
  };

  const createTodo = (description: string, event: any) => {
    if (event.key === "Enter") {
      const todo = new Todo(
        jwtToken,
        props.rerenderAppComponentState,
        props.rerenderAppComponentFunction
      );
      todo.createTodo(description);
    }
  };

  const signOut = () => {
    const auth = new Auth(
      "john",
      "33333",
      history,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    auth.signOut();
  };

  useEffect(() => {
    if (!props.isLogged) {
      history.replace("/signin");
    }
    getInProgressTodoes(todoStatus);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="homepage">
        <nav>
          <Button
            className="signoutBtn"
            onClick={() => signOut()}
            type="submit"
            variant="contained"
          >
            Sign out
          </Button>
          <h2>Hi, {username}</h2>
        </nav>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Add a todo"
            onKeyPress={(e: any) => createTodo(e.target.value, e)}
          />
          <select
            onChange={(e: any) => {
              const status = e.target.value;
              setTodoStatus(status);
              getInProgressTodoes(status);
            }}
            value={todoStatus}
          >
            <option value="IN_PROGRESS">In progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        {todoes.length > 0 &&
          todoes.map((todo: any) => {
            return (
              <TodoComponent
                key={todo.id}
                todo={todo}
                rerenderAppComponentState={props.rerenderAppComponentState}
                rerenderAppComponentFunction={
                  props.rerenderAppComponentFunction
                }
                getInProgressTodoesFunction={getInProgressTodoes}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default withRouter(Home);
