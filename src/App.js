import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import "semantic-ui-css/semantic.min.css";
import {isAuthenticated} from "./auth";

import Conector from "./pages/conector/Conector";
import Login from "./pages/login/Login";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/conector" component={Conector} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
