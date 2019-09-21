import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/CityItem.stylesheet.scss'
import Button from "react-bootstrap/es/Button";


const CityItem = props =>{
    // const [temp, chnageTemp] = useState(props.temp);
    //  onClick={()=>props.ChooseFavorite(props.id,props.cityName)}
        return (
              <div>
                   <div className="weather-card ">
                   <h1>{props.temp}º</h1>
                  <div className="cityText">{props.cityName}</div>
                  <div className="weatherText" >{props.weatherText}</div>

              </div>
           </div>
        );

       function ChooseFavorite() {
         props.ChooseFavorite(props.id, props.cityName);
       }
      }

export  default CityItem
