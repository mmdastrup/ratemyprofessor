import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span href="#">copyright 2018</span>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">Reviews</a>
                    <a href="#">About Us</a>
                </div>
            </div>
        );
    }
}

export default Footer;