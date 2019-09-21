import React, { Component } from "react";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/FormControl";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import "../assets/stylesheets/SerchCity.stylesheet.css";
import { LoadWeatherAction } from "../redux/Weather.actions";
import { findCity } from "../api/Weather.api";
import Dropdown from "react-bootstrap/Dropdown";

class SearchCity extends Component {

  state = {
    list: "",
    searchValue: ""
  };

  onFieldChange = e => {
    const { value } = e.target;

    if (value.length > 0 && this.isEnlish(value)) {
      findCity(value).then(sug => {
        this.setState({ list: sug });
      });
    } else {
      this.inputTitle.value = "";
      alert(" enter only in english");
    }
  };

  isEnlish = text => {
    const english = /^[A-Za-z0-9]*$/;
    const result = english.test(text);
    return result;
  };

  enterName = (key, city) => {
    const { dispatch } = this.props;

    dispatch(LoadWeatherAction(key, city));
  };

  render() {
    return (
      <div>
        <Card className="search-box">
          <CardContent>
            <FormControl
              type="text"
              placeholder="Search City"
              className="mr-sm-2"
              ref={el => (this.inputTitle = el)}
              onChange={e => {
                this.onFieldChange(e);
              }}
            />
            {/*  <Button variant="outline-success">Search</Button>*/}
          </CardContent>
          <ul>
            {this.state.list &&
              this.state.list.map(name => (
                <li className="dropdown-content">
                  <Dropdown.Item
                    onClick={() => {
                      this.enterName(name.Key, name.LocalizedName);
                    }}
                  >
                    {name.LocalizedName}
                  </Dropdown.Item>
                </li>
              ))}
          </ul>
        </Card>
      </div>
    );
  }
}


export default connect(undefined,undefined,)(SearchCity);
