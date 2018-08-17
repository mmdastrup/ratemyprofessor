import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div class="wrap">
            <div class="search">
               <input type="text" class="searchTerm" placeholder="Search by teacher or by school"/>
               <button type="submit" class="searchButton"/>
                 <i class="fa fa-search"></i>
                <button/>
            </div>
          </div>
        );
    }
}

export default SearchBar;
