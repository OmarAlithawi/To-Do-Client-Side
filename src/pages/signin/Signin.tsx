import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../../auth/auth";
import { useStyles } from "../auth.styles";
import "./signin.css";

const Signin = withRouter((props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const classes = useStyles();

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
    <div className="signinCotainer">
      <h1>Sign in</h1>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={(e) => signIn(username, password, e)}
      >
        <TextField
          required
          label="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="signinBtn" variant="contained">
          Sign in
        </Button>
      </form>
      <p onClick={() => history.push("/signup")}>Create an account</p>
    </div>
  );
});

export default Signin;
