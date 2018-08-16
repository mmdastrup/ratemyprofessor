import React, { Component } from 'react';
import Navbar from './navbar';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
               <h1>This is the about page</h1> 
            </div>
        );
    }
}

export default About;