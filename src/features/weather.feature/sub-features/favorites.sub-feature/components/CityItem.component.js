import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/CityItem.styleseet.css'
import Button from "react-bootstrap/es/Button";


const CityItem = props =>{
   // const [temp, chnageTemp] = useState(props.temp);

    return(
        <Card onClick={()=>props.ChooseFavorite(props.cityName)} className="item-card">
         <div>{props.cityName}</div>
            <br/>
            <div>{props.temp}</div>
            <br/>
            <div>{props.condition}</div>
            <Button >switch to F</Button>
            <Button onClick={()=>props.RemoveFavorite(props.cityName)}>Remove</Button>
        </Card>

    )
}

export  default CityItem
