import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./assets/stylesheets/header.stylesheet.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandIcon from "./assets/images/cloudy.png";


class Header extends Component {
  render() {
    return (
      <Navbar
        className="fixed-top shadow p-3 bg-white mb-5 navOve"
        collapseOnSelect
        expand="lg"
        bg="light"
      >
        <Navbar.Brand>
          <img src={BrandIcon} alt="cloudy" className="brand-icon" />
          <div className="brand-text"> Weatherly</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link>
              <NavLink
                activeClassName="btn-nav-active"
                className="btn"
                to="/home"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="btn-nav-active"
                className="btn"
                to="/favorites"
              >
                Favorites
              </NavLink>
            </Nav.Link>
          </Nav>
                  </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;
