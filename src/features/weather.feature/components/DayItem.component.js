import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/DayItem.stylesheet.css'


const DayItem = props =>{


    const [temp, chnageTemp] = useState(props.fromTemp);
    const [temp2, chnageTemp2] = useState(props.toTemp);

    return(
        <Card className="item-card">
            <div>{props.day} </div>
               <br/>
            <div> {temp} C° - {temp2} C° </div>
            <div>
                <button onClick={() => {chnageTemp(temp * 9/5 + 32 )
                    chnageTemp2(temp2 * 9/5 + 32 )
                }}>
                    Change to F
                </button>
            </div>
        </Card>

    )
};

export  default DayItem
