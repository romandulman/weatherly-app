import React ,{Component} from 'react';
import Header from '../layout/header/Header.container'
import { connect } from "react-redux";
import {alertClear} from "../common/alert/redux/Alert.actions";
import {FavoritesPage} from '../../features'
import {WeatherPage} from '../../features'
import {history} from "../../helpers/history";
import Toast from '../common/toast/Toast'
  ///history={history}
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
  const { dispatch } = this.props;

history.listen((location, action) => {
  // clear alert on location change
  dispatch(alertClear());
});
}
  render() {
    const {message} =this.props;

    return (
      <div className="App">
        <Router >
          <Header/>
          {message && <Toast  title={message}/>}
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
