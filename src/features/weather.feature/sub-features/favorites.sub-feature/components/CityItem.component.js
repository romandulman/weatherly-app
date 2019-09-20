import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/CityItem.styleseet.css'
import Button from "react-bootstrap/es/Button";


const CityItem = props =>{
   // const [temp, chnageTemp] = useState(props.temp);
  //  onClick={()=>props.ChooseFavorite(props.id,props.cityName)}
    return(
        <Card  className="item-card">
            <button onClick={ChooseFavorite}>chhoose</button>
         <div>{props.cityName}</div>
            <br/>
            <div>{props.temp}</div>
            <br/>
            <div>{props.id}</div>
            <br/>
            <div>{props.condition}</div>
            <Button >switch to F</Button>
          {/*  <Button onClick={RemoveFavorite}>Remove</Button>*/}

        </Card>

    );

   /* function RemoveFavorite() {
        props.RemoveFavorite(props.cityName)
    }
*/
    function ChooseFavorite() {
        props.ChooseFavorite(props.id,props.cityName)
    }
}

export  default CityItem
