import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../auth/auth";

const Signin = withRouter((props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;

  const signIn = async (
    username: string,
    password: string,
    event: any
  ): Promise<void> => {
    const auth = new Auth(
      username,
      password,
      history,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );
    event.preventDefault();
    auth.signIn();
  };

  useEffect(() => {
    if (props.isLogged) {
      history.replace("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <form onSubmit={(e) => signIn(username, password, e)}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
        <button type="submit">Sign in</button>
      </form>
      <h1 onClick={() => history.push("/signup")}>Create an account</h1>
    </div>
  );
});

export default Signin;
