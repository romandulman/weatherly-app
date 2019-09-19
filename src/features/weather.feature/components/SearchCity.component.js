import React, { Component } from 'react'
import { connect } from "react-redux";
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/stylesheets/SerchCity.stylesheet.css'
import {LoadWeatherAction} from "../redux/Weather.actions";
import {findCity} from '../api/Weather.api'
import Autosuggest from 'react-autosuggest';

class SearchCity extends Component {
  state= {
    list:''
  }

  onFieldChange = (e) => {
    const { value } = e.target;
    findCity(value).then(sug =>{
      this.setState({list: sug })
    })

    // dispatch(findByNameAction(this.search.value))
  };

 enterName = (key,city) =>{
   const { dispatch } = this.props;
   dispatch(LoadWeatherAction(key,city))
 }

  render() {
    return (
        <div >
          <Card className="search-box">
            <Card.Body>
              <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search City"
                    className="mr-sm-2"
                    onChange={e => {
                      this.onFieldChange(e);
                    }}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Card.Body>
            <ul>{this.state.list && this.state.list.map((name)=>(
                <li><a onClick={()=>{this.enterName(name.Key,'tlv')}} >{name.LocalizedName}</a></li>
            ))}</ul>
          </Card>

        </div>
    );
  }
}


export default connect(undefined,undefined,)(SearchCity);
