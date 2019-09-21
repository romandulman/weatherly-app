import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/DayItem.stylesheet.scss'


const DayItem = props =>{

   // {/* <div className="weather-wrapper">*/}

    const [temp, chnageTemp] = useState(props.fromTemp);
    const [temp2, chnageTemp2] = useState(props.toTemp);

    return(

           <div>
                <div className="weather-card ">
                    <div className="weather-icon sun"></div>
                    <p>{props.day}</p>
                    <h1>{temp}º</h1>
                </div>
            </div>
    )
};

export  default DayItem

/*
<div>
<button onClick={() => {chnageTemp(temp * 9/5 + 32 )
    chnageTemp2(temp2 * 9/5 + 32 )
}}>
Change to F
</button>
</div>*/
