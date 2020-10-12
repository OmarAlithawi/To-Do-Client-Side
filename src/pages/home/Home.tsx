import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Auth } from "../../auth/auth";
import TodoComponent from "../../components/Todo";
import { Todo } from "../../todo/index";
import { Button, Container } from "@material-ui/core";
import "./home.style.css";

const Home = (props: any) => {
  const username = useSelector((state: any) => state.username);
  const jwtToken = useSelector((state: any) => state.jwtToken);
  const todoes = useSelector((state: any) => state.todoes);
  const [todoStatus, setTodoStatus] = useState("IN_PROGRESS");
  const { history } = props;

  const getTodoes = (status: string, jwtToken: string) => {
    const todo = new Todo();
    todo.getTodo(status, jwtToken);
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
    getTodoes(todoStatus, jwtToken);
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
          <input type="text" placeholder="Add a todo" />
          <select
            onChange={(e: any) => setTodoStatus(e.target.value)}
            value={todoStatus}
          >
            <option value="IN_PROGRESS">In progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        {todoes &&
          todoes.map((todo: any) => {
            return <TodoComponent todo={todo} />;
          })}
      </div>
    </Container>
  );
};

export default withRouter(Home);
