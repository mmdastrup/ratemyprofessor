import React, { Component } from 'react';
import Navbar from './navbar';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>This is the homepage</h1>
            </div>
        );
    }
}

export default Homepage;