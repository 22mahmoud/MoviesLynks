import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./contents/routes";
import HomePage from "./modules/home";
import LoginPage from "./modules/login";
import SignupPage from "./modules/signup";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={SignupPage} />
        <Route path={ROUTES.LOG_IN} component={LoginPage} />
      </Switch>
    </Router>
  );
}
