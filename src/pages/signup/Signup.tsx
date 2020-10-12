import { Button, TextField } from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../../auth/auth";
import { useStyles } from "../auth.styles";
import "./signup.css";

const Signup: FunctionComponent = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const classes = useStyles();

  const signUp = async (
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
    auth.signUp();
  };

  return (
    <div className="signupContainer">
      <div className="listContainer">
        <ul className="signupRequirement">
          <li>
            <strong>Username:</strong> Must be between 4 and 25 characters
          </li>
          <li>
            <strong>Password:</strong> Must be between 8 and 25 characters, and
            must have atleast 1 captital letter and 1 special characters{" "}
          </li>
        </ul>
      </div>
      <div className="formContainer">
        <h1>Sign up</h1>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={(e) => signUp(username, password, e)}
        >
          <TextField
            required
            id="standard-required"
            label="Required"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            id="standard-required"
            label="Required"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="signupBtn" type="submit" variant="contained">
            Sign up
          </Button>
        </form>
        <p onClick={() => history.push("/signin")}>Already have an account?</p>
      </div>
    </div>
  );
};

export default withRouter(Signup);
