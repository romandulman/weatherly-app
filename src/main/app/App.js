import React, { Component } from "react";
import Header from "../layout/header/Header.container";
import { connect } from "react-redux";
import { FavoritesPage } from "../../features";
import { WeatherPage } from "../../features";
import SnackbarAlert from "../common/alert/containers/Snackbar.container";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <SnackbarAlert />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={WeatherPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.AlertReducer.message
  };
};

export default connect(mapStateToProps)(App);
