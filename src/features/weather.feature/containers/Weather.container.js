import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../containers/Search.container";
import queryString from "query-string";
import "../assets/stylesheets/Weather.stylesheet.scss";
import DayItem from "../components/DayItem.component";
import {
  LoadWeatherAction,
  LoadCurrentLocationWeather,
  HandleFavorite
} from "../redux/Weather.actions";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../../../main/common/spinner/Spinner";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

class Weather extends Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { dispatch } = this.props;
    if (values.id === undefined) {
      dispatch(LoadCurrentLocationWeather());
      dispatch(LoadWeatherAction(215854, "Tel Aviv"));
    } else {
      const decodedFav = values.fav === "true";
      dispatch(LoadWeatherAction(values.id, values.city, decodedFav));
    }
  }

  render() {
    const { dispatch, weatherData, isFavorite, loading } = this.props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    return (
      <div className="root">
        <Search />

          <div className="spinner-container"> {loading && <Spinner />}</div>

        <Container fluid>
          <Row>
            <Col>
              {weatherData.current &&
                weatherData.current.map(data => (
                  <div className="default-container">
                    <img
                      className="default-icon"
                      src={
                        "https://weatherly-res.s3.eu-central-1.amazonaws.com/weather-icons/" +
                        data.WeatherIcon +
                        ".png"
                      } alt="weather-icons"/>
                    <div className="default-text-cont">
                      <div className="default-city">{weatherData.city}</div>
                      <div className="default-temp">
                        {data.Temperature.Metric.Value} C°
                      </div>
                      <div className="default-con">{data.WeatherText} </div>
                    </div>
                  </div>
                ))}
            </Col>

            {!isFavorite && (
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Add to Favorites"
              >
                <Fab
                  color="primary"
                  onClick={() =>
                    dispatch(HandleFavorite(weatherData, isFavorite))
                  }
                >
                  <AddIcon />
                </Fab>
              </Tooltip>
            )}

            {isFavorite && (
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Remove from Favorites"
              >
                <Fab
                  color="secondary"
                  onClick={() =>
                    dispatch(HandleFavorite(weatherData, isFavorite))
                  }
                >
                  <DeleteIcon />
                </Fab>
              </Tooltip>
            )}
          </Row>
          <Row>
            {weatherData.current &&
              weatherData.forcast.DailyForecasts.map((data, index) => (
                <Col className="marginDiv" xl={2}>
                  <DayItem
                    iconNum={data.Day.Icon}
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
  return {
    weatherData: state.WeatherReducer.items,
    isFavorite: state.WeatherReducer.isFavorite,
    loading: state.WeatherReducer.loading,
    error: state.WeatherReducer.error
  };
};
export default connect(mapStateToProps)(Weather);
