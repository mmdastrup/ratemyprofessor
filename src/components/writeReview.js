import React, { Component } from 'react';

import Navbar from './navbar';
import SocialIcons from './socialIcons';
import Highlights from './highlights';
import Footer from './footer';
import ReviewForm from './reviewForm';


class WriteReview extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Highlights/>
                <ReviewForm/>
                <SocialIcons/>
                <Footer/>
            </div>
        );
    }
}

export default WriteReview;