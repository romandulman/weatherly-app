import React ,{Component} from 'react';
import Header from '../layout/header/Header.container'
import FavoritesPage from '../weather/containers/Favorites.container'
import WeatherPage from '../weather/containers/Weather.container'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
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

export default App;
