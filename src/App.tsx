import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getJwtToken } from "./redux/actions";
import { useDispatch } from "react-redux";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const local_storge = JSON.parse(window.localStorage.getItem("login")!);
    if (local_storge) {
      const jwtToken = local_storge.token;

      setIsLogged(local_storge.login);
    } else {
      setIsLogged(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Signin} />
        <ProtectedRoute
          exact={true}
          path="/"
          component={() => <Home />}
          isLogged={isLogged}
        />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={(): any => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default App;
