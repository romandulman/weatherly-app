import React, { Component } from 'react'
import { connect } from "react-redux";
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/SerchCity.stylesheet.css'
import {LoadWeatherAction} from "../redux/Weather.actions";
import {findCity} from '../api/Weather.api'
import Dropdown from 'react-bootstrap/Dropdown'
class SearchCity extends Component {
  state= {
    list:''
  };

  onFieldChange = (e) => {
    const { value } = e.target;
    findCity(value).then(sug =>{
      this.setState({list: sug })
    })

  };

 enterName = (key,city) =>{
   const { dispatch } = this.props;
   dispatch(LoadWeatherAction(key,city))
 };

  render() {
    return (
        <div >
          <Card className="search-box">
            <Card.Body>

                <FormControl
                    type="text"
                    placeholder="Search City"
                    className="mr-sm-2"
                    onChange={e => {
                      this.onFieldChange(e);
                    }}
                />
              {/*  <Button variant="outline-success">Search</Button>*/}

            </Card.Body>
            <ul>{this.state.list && this.state.list.map((name)=>(
                <li className="dropdown-content"><Dropdown.Item  onClick={()=>{this.enterName(name.Key,name.LocalizedName)}}>{name.LocalizedName}</Dropdown.Item></li>
            ))}</ul>


          </Card>

        </div>
    );
  }
}


export default connect(undefined,undefined,)(SearchCity);
