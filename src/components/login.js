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
      <div className="form-container">
       <Navbar/>
       <div className="wrapper">
         <form className="form-inner">
         <label>Login</label>
           <div className="form">
             <input type="text" name="username" placeholder="Username"onChange={this.handleChange} />
           </div>
           <div className="form">
             <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
           </div>
           <Link to="/" className="brand">
             <button>Login</button>
           </Link>

           <p>Don't have an account?</p>
           <Link to="/createAccount" className="brand">
             Create a free account
           </Link>

         </form>
       </div>
     </div>
    );
  }
}

export default Login;