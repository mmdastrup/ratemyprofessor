import React, { Component } from 'react';
import Navbar from './navbar';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>This is the login page</h1>
            </div>
        );
    }
}

export default Login;