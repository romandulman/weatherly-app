import React, { Component } from "react";
import "./assets/stylesheets/header.stylesheet.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown"
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';

import BrandIcon from './assets/images/cloudy.png'

const mapStateToProps = state => {
    return {

    };
};



class Header extends Component {

    render() {
        return (
            <Navbar
                className="fixed-top shadow p-3 bg-white mb-5 navOve"
                collapseOnSelect
                expand="lg"
                bg="light"

            >
                <Navbar.Brand><img src={BrandIcon} alt="cloudy" className="brand-icon"/><div className="brand-text"> Weatherly</div></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
                    <Nav>
                        <Nav.Link>
                            <NavLink activeClassName="btn-nav-active" className="btn" to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink activeClassName="btn-nav-active" className="btn" to="/favorites">Favorites</NavLink>
                        </Nav.Link>
                    </Nav>

                    <Nav.Item>
                        <Nav.Link>
                            <Dropdown>
                            <Dropdown.Menu alignRight={true}>
                                {this.props.isLoggedIn && (  <Dropdown.Item> <Link to="/profile">My Profile</Link></Dropdown.Item>  )}
                                <Dropdown.Item onClick={this.props.LoginBtn}> {this.props.isLoggedIn ? "Logout" : "Login"}
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>

                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(mapStateToProps)(Header);
