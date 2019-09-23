import React from "react";
import "../assets/stylesheets/CityItem.stylesheet.scss";

const CityItem = props => {
  return (
        <div className="weather-card " onClick={()=>props.ChooseFavorite(props.id, props.cityName)}>
          <h1>{props.temp}º</h1>
          <div className="cityText">{props.cityName}</div>
          <div className="weatherText">{props.weatherText}</div>
        </div>
  )
};

export default CityItem;
