import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";



class Login extends Component {

  constructor () {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
    <Navbar {...event.target.username}/>
  }


  
  
  render () {
    return (
      <div className="form">
        <Navbar/>
        <form>

          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange} />
          
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />

          <Link to="/" className="brand">
            Submit
          </Link>

          
          <p>Don't have an account?</p>
          <Link to="/createAccount" className="brand">
            Create a free account
          </Link>
          
        </form>

      </div>
    );
  }
}

export default Login;