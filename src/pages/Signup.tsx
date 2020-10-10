import React, { FunctionComponent, useState } from "react";
import { Auth } from "../auth/auth";

const Signup: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (
    username: string,
    password: string,
    event: any
  ): Promise<void> => {
    const auth = new Auth(username, password);
    event.preventDefault();
    auth.signUp();
    const test = "hi";
  };

  return (
    <div>
      <form onSubmit={(e) => signUp(username, password, e)}>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
