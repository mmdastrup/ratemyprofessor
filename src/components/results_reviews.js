import React, { Component } from 'react';
import Navbar from './navbar';

export default class Results_reviews extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>This is the results and reviews page</h1>
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
                            <div><i class="fas fa-filter"></i> Filter Results <i class="fas fa-sort-down"></i></div>
                            <div>
                                <div className="filter filter-by-school">
                                    <div>Schools <i class="fas fa-sort-down"></i></div>
                                    <ul>
                                        <li>School 1 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>School 2 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>School 3 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>School 4 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>School 5 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                    </ul>
                                </div>
                                <div className="filter filter-by-department">
                                    <div>Departments <i class="fas fa-sort-down"></i></div>
                                    <ul>
                                        <li>Math <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>Science <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>English <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>Geography <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>Computer Science <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                    </ul>
                                </div>
                                <div className="filter filter-by-state">
                                    <div>States <i class="fas fa-sort-down"></i></div>
                                    <ul>
                                        <li>State 1 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>State 2 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>State 3 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>State 4 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                        <li>State 5 <i class="far fa-square"></i><i class="fas fa-square"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="results-wrapper">
                    <div className="results-title">
                        <div>Results for: PROFESSOR</div>
                        <div>Results: 1 2 3 4 5 6 7 ...</div>
                    </div>
                    <div className="results-body">
                        Hey this is the results body
                    </div>
                </div>
            </div>
        );
    }
}