import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";



class CreateAccount extends Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
      phone: ''
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
        <form className="wrapper">
          <form className="form-inner">
          <label>Create Account</label>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
          <input type="text" name="phone" placeholder="Phone" onChange={this.handleChange} />
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          <p>Don't have an account? Create an Account</p>

          <Link to="/results_reviews" className="brand">
            Create Account
          </Link>
          </form>
        </form>

      </div>
    );
  }
}

export default CreateAccount;