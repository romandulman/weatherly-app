import React from "react";
import "../assets/stylesheets/DayItem.stylesheet.scss";

const DayItem = props => {
  return (
    <div>
      <div className="weather-card ">
        <div className="weather-icon">
        <img src={"https://weatherly-res.s3.eu-central-1.amazonaws.com/weather-icons/" + props.iconNum + ".png"} alt="weather-icons"/></div>
        <p>{props.day}</p>
        <h1>{props.toTemp}º</h1>
      </div>
    </div>
  );
};

export default DayItem;

