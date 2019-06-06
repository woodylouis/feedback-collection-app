import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Dashboard from "./surveys/Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Mrlouisli from "./mrlouisli/Louis";
// const mrlouisli = () => <h2>Hello, This is louis</h2>;
const myAppList = () => <h2>Here is my apps</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Mrlouisli} />
        <div className="container">
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/app" component={myAppList} />
          <Route exact path="/app/surveys" component={Dashboard} />
          <Route path="/app/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
