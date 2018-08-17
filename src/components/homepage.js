import React, { Component } from 'react';
import Navbar from './navbar';
import Logo from './logo_component';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>This is the homepage</h1>
                <Logo/>

            </div>
        );
    }
}

export default Homepage;