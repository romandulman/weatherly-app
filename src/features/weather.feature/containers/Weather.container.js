import React, { Component } from "react";
import { connect } from "react-redux";
import SearchCity from "../components/SearchCity.component";
import "../assets/stylesheets/Weather.stylesheet.css";
import DayItem from "../components/DayItem.component";
import {
  LoadWeatherAction,
  AddFavotiteAction,
  RemoveFavoriteAction
} from "../redux/Weather.actions";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "../../common/Spinner";

class Weather extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(LoadWeatherAction(215854, "tlv"));
  }

  render() {
    const { dispatch, weatherData, isFavorite, loading } = this.props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
      console.log(isFavorite)
    return (
      <div className="root">
        <Container>
          <SearchCity />
          {loading && <Spinner />}
          <Row>
            <Col>
              {weatherData.current &&
                weatherData.current.map(data => (
                  <div>
                    <div>{data.Temperature.Metric.Value} C°</div>
                    <div>{data.WeatherText} </div>
                  </div>
                ))}
            </Col>
            <Button
              onClick={() =>
                isFavorite
                  ? dispatch(RemoveFavoriteAction())
                  : dispatch(AddFavotiteAction())
              }
            >
              {isFavorite ? "remove from fav" : "add to Fav"}
            </Button>
          </Row>
          <Row>
            {weatherData.forcast &&
              // weatherData.fData.DailyForecasts
              weatherData.forcast.map((data, index) => (
                <Col sm={2}>
                  <DayItem
                    fromTemp={data.Temperature.Minimum.Value}
                    toTemp={data.Temperature.Maximum.Value}
                    day={days[index]}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.WeatherReducer.isFavorite);
  return {
    weatherData: state.WeatherReducer.items,
    isFavorite: state.WeatherReducer.isFavorite,
    loading: state.WeatherReducer.loading,
    error: state.WeatherReducer.error
  };
};
export default connect(mapStateToProps)(Weather);
