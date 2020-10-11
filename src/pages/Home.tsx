import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../auth/auth";

const Home = (props: any) => {
  const { history } = props;
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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default withRouter(Home);
