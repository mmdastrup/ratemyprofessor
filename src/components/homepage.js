import React, { Component } from 'react';

import Navbar from './navbar';
import SocialIcons from './socialIcons';
import Logo from './logo_component';


const professors = [
    {name: "Dr. Johnson", rating: 5, class:"Gym", school:"UVU"},
    {name: "Dr. Nelson", rating: 4, class:"English", school:"BYU"},
    {name: "Dr. Larson", rating: 5, class:"Health", school:"UofU"},
    {name: "Dr. Kelley", rating: 2, class:"English", school:"Weber"},
    {name: "Dr. Leek", rating: 5, class:"social studies", school:"Westminster"},
    {name: "Dr. Allred", rating: 3, class:"English", school:"USU"},
    {name: "Dr. Stehpens", rating: 5, class:"math", school:"Weber"},
    {name: "Dr. Richards", rating: 2, class:"science", school:" BYU Idaho"},
    {name: "Dr. Sturm", rating: 4, class:"English", school:"USU"},
    {name: "Dr. Nickles", rating: 3, class:"math", school:"UVU"}
]

class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SocialIcons/>
                <Logo/>
            </div>
        );
    }
}

export default Homepage;