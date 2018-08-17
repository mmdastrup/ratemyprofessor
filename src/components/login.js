import React, { Component } from "react";
import Navbar from "./navbar";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            emailvalue: '',
            passwordvalue: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }


      handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault();
      }

  render() {
    return (
      <div>
        <Navbar />
        <h1>This is the login page</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          userame:
          <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <label>
          email:
          <input name="email" type="text" value={this.state.emailvalue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <label>
          password:
          <input name="password" type="text" value={this.state.passwordvalue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Login;
