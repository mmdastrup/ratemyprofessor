import React, { Component } from "react";
import Navbar from "./navbar";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>This is the about page</h1>
        <div className="wrapper">
          <div className="TopBar">
            <div className="SearchBar">SearchBar</div>
            <div className="FacebookLink">facebook</div>
            <div className="SnapChatLink">SnapChat</div>
            <div className="TwitterLink">Twitter</div>
          </div>
          <div className="About" />
          <div className="FAQS" />
          <div className="ContactUs">
            <div className="CULeft">
              <a>FIRST NAME</a>
              <a>LAST NAME</a>
              <a>SCHOOL</a>
              <a>EMAIL</a>
              <a>COMMENTS</a>
            </div>
            <div className="CURight">
              <a>TEXT BOX</a>
              <a>TEXT BOX2</a>
              <a>TEXT BOX3</a>
              <a>TEXT BOX4</a>
              <a>TEXT BOX5</a>
            </div>
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

export default About;
