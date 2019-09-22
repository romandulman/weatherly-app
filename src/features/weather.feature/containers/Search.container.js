import React, { Component } from "react";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/FormControl";
import "../assets/stylesheets/SerchCity.stylesheet.css";
import { LoadWeatherAction } from "../redux/Weather.actions";
import { findCity } from "../api/Weather.api";
import Dropdown from "react-bootstrap/Dropdown";

class Search extends Component {
  state = {
    list: "",
    searchValue: ""
  };

  onFieldChange = e => {
    const { value } = e.target;
    if (value.length > 0) {
      if (this.isEnlish(value)) {
        findCity(value).then(sug => {
          this.setState({ list: sug });
        });
      } else {
        this.inputTitle.value = "";
        alert("The input is too short or Not in English!");
      }
    } else {
      this.setState({ list: "" });
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
        <div className="search-box">
          <FormControl
            type="text"
            placeholder="Search City"
            className="mr-sm-2"
            ref={el => (this.inputTitle = el)}
            onChange={e => {
              this.onFieldChange(e);
            }}
          />
          <ul className="dropdown-content">
            {this.state.list &&
              this.state.list.map(name => (
                <li >
                  <Dropdown.Item
                    onClick={() => {
                      this.enterName(name.Key, name.LocalizedName);
                      this.setState({list:''})
                    }}
                  >
                    {name.LocalizedName}
                  </Dropdown.Item>
                </li>
              ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default connect(
  undefined,
  undefined
)(Search);
