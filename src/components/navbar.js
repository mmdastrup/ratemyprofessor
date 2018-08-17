import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="container">

        {/* <div className="navbar">
          <a href="#" className="toggle" id="navHamburger">
            <i className="fas fa-bars" />
          </a> */}

          <div className="navbarText">  
            
            <div className="left">
              <Link to="/" className="brand">
                  Home
              </Link>
              <Link to="/results_reviews" className="brand">
                Write Reviews
              </Link>
              <Link to="/about" className="brand">
                About Us
              </Link>
            </div>

            <div className="right">
              <Link to="/login" className="brand">
                Login
              </Link>
              <Link to="/login" className="brand">
                Sing Up
              </Link>
            </div>
          </div>
        {/* </div> */}
        

      </div>
    );
  }
}

export default Navbar;