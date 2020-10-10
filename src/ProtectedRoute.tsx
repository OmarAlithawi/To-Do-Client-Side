import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
  isLogged: boolean;
}

export default function ProtectedRoute({
  component: Component,
  isLogged,
  ...otherProps
}: IProps) {
  return (
    <Route
      {...otherProps}
      render={(otherProps) => {
        if (isLogged) {
          return <Component {...otherProps} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
}
