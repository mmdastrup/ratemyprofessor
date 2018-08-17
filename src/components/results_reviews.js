import React, { Component } from 'react';
import Navbar from './navbar';

export default class Results_reviews extends Component {
    render() {

        // function Dropdown() {
        //     const collapsible = document.getElementsByClassName('collapsible');
        //     collapsible.addEventLisener('click', function() {
        //         this.classList.toggle('active')
        //         let content = document.getElementsByClassName('content');
        //         if (content.style.display === "block") {
        //             content.style.display = "none";
        //           } else {
        //             content.style.display = "block";
        //           }
        //     });
        //     collapsible.style.border = "0px 0px 100px 0px solid red";
        // }
        
        return (
            <div className="page">
                <Navbar/>
                <div className="search-results">
                    <div className="sub-heading">
                        <div className="search-bar">
                            <input/>
                        </div>
                        <div className="social-media-icons">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className="results">
                        <div className="filter-wrapper">
                            <div className="filter-dropdown">
                                <button className="collapsible" onClick="Dropdown()"><i class="fas fa-filter"></i> Filter Results <i class="fas fa-sort-down"></i></button>
                                <div className="content">
                                    <div className="filter filter-by-school">
                                        <button>Schools <i class="fas fa-sort-down"></i></button>
                                        <ul>
                                            <li>School 1</li>
                                            <li>School 2</li>
                                            <li>School 3</li>
                                            <li>School 4</li>
                                            <li>School 5</li>
                                        </ul>
                                    </div>
                                    <div className="filter filter-by-department">
                                        <button>Departments <i class="fas fa-sort-down"></i></button>
                                        <ul>
                                            <li>Math</li>
                                            <li>Science</li>
                                            <li>English</li>
                                            <li>Geography</li>
                                            <li>Computer Science</li>
                                        </ul>
                                    </div>
                                    <div className="filter filter-by-state">
                                        <button>States <i class="fas fa-sort-down"></i></button>
                                        <ul>
                                            <li>State 1</li>
                                            <li>State 2</li>
                                            <li>State 3</li>
                                            <li>State 4</li>
                                            <li>State 5</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="results-wrapper">
                            <div className="results-title">
                                <div className="results-title-name">Results for: </div>
                                <div className="results-title-page">Results: 1 2 3 ...</div>
                            </div>
                            <div className="results-body">
                                Hey this is the results body
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    footer
                </div>
            </div>
        );
    }
}