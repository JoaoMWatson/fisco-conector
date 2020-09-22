import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import Conector from "./pages/conector/Conector";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/conector" component={Conector} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
