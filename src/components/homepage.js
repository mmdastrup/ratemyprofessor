import React, { Component } from 'react';
import Navbar from './navbar';
import SocialIcons from './socialIcons';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SocialIcons/>
            </div>
        );
    }
}

export default Homepage;