import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";



class CreateAccount extends Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  
  
  render () {
    return (
      <div className="form">
        <Navbar/>
        <form>

          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />

          <label>Phone</label>
          <input type="text" name="phone" onChange={this.handleChange} />

          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />

          

          <p>Don't have an account? Create an Account</p>

          <Link to="/results_reviews" className="brand">
            Create Account
          </Link>
          
        </form>

      </div>
    );
  }
}

export default CreateAccount;