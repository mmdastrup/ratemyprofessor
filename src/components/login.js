import React, { Component } from "react";
import Navbar from "./navbar";
import { runInThisContext } from "vm";

class Login extends Component {

  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  
  
  render () {
    return (
      <div className="form">
        <Navbar/>
        <form>
        
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />

          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />
          
        </form>
      </div>
    );
  }
}

export default Login;