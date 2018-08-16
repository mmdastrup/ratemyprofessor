import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#" className="toggle" id="navHamburger">
          <i className="fas fa-bars" />
        </a>
        <Link to="/" className="brand">
          Rate My Professor
        </Link>
        <div className="left">
          <Link to="/results_reviews" className="brand">
            Search Results
          </Link>
          <Link to="/about" className="brand">
            About Us
          </Link>
        </div>
        <div className="right">
          <Link to="/login" className="brand">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;