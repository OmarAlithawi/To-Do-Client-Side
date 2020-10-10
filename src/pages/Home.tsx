import React from "react";
import { Auth } from "../auth/auth";

const Home = () => {
  const signOut = () => {
    return Auth.prototype.signOut();
  };

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
