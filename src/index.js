import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./views/Signin/SignIn"

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      {/* <Redirect from="/" to="/signin" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
