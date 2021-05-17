import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageView from "./views/HomepageView";
import LoginView from "./views/LoginView";
import WeatherView from "./views/WeatherView";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login">
        <LoginView />
      </Route>
      <Route path="/homepage">
        <HomepageView />
      </Route>
      <Route path="/weather">
        <WeatherView />
      </Route>
    </Switch>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
