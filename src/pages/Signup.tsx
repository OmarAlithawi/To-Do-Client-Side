import React, { FunctionComponent, useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../auth/auth";

const Signup: FunctionComponent = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const signUp = async (username: string, password: string): Promise<void> => {
    const auth = new Auth(
      username,
      password,
      history,
      props.rerenderAppComponentState,
      props.rerenderAppComponentFunction
    );

    auth.signUp();
  };

  return (
    <div>
      <form onSubmit={() => signUp(username, password)}>
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
        <button type="submit" className="btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
