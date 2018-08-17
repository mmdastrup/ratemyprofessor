import React, { Component } from "react";
import Navbar from "./navbar";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernamevalue: '',
            emailvalue: '',
            passwordvalue: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          usernamevalue: event.target.usernamevalue,
          emailvalue: event.target.emailvalue,
          passwordvalue: event.target.passwordvalue
        });
      }

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
        <label>
          userame:
          </label>
          <input name="username" type="text" onChange={this.handleChange} />
        <label>
          email:
          </label>
          <input name="email" type="text" onChange={this.handleChange} />
        <label>
          password:
          </label>
          <input name="password" type="password" onChange={this.handleChange} />
      </form>
      </div>
    );
  }
}

export default Login;
