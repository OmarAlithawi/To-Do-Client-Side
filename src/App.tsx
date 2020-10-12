import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [rerenderAppComponentState, setRerenderAppComponentState] = useState(
    false
  );

  const rerenderAppComponentFunction = (state: boolean) => {
    return setRerenderAppComponentState(!state);
  };

  useEffect(() => {
    const local_storge = JSON.parse(window.localStorage.getItem("login")!);
    if (local_storge) {
      setIsLogged(local_storge.login);
    } else {
      setIsLogged(false);
    }
    // eslint-disable-next-line
  }, [rerenderAppComponentState]);

  return (
    <Router>
      <Switch>
        <Route
          path="/signin"
          component={() => (
            <Signin
              isLogged={isLogged}
              rerenderAppComponentState={rerenderAppComponentState}
              rerenderAppComponentFunction={rerenderAppComponentFunction}
            />
          )}
        />
        <ProtectedRoute
          exact={true}
          path="/"
          component={() => (
            <Home
              isLogged={isLogged}
              rerenderAppComponentState={rerenderAppComponentState}
              rerenderAppComponentFunction={rerenderAppComponentFunction}
            />
          )}
          isLogged={isLogged}
        />
        <Route path="/signup" component={() => <Signup />} />
        <Route path="*" component={(): any => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default App;
