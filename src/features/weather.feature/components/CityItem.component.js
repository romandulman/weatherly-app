import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/CityItem.styleseet.css'
import Button from "react-bootstrap/es/Button";


const CityItem = props =>{
   // const [temp, chnageTemp] = useState(props.temp);

    return(
        <Card className="item-card">
         <div>{props.cityName}</div>
            <br/>
            <div>{props.temp}</div>
            <br/>
            <div>{props.condition}</div>
            <Button>change to F</Button>
            <Button>Remove</Button>
        </Card>

    )
}

export  default CityItem
