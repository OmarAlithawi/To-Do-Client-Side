import React, { useState } from "react";
import { Auth } from "../auth/auth";

const Signin = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const signIn = async (
    username: string,
    password: string,
    event: any
  ): Promise<void> => {
    const auth = new Auth(username, password, history);
    event.preventDefault();
    auth.signIn();
  };

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
    </div>
  );
};

export default Signin;
