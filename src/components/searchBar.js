import React, { Component } from 'react';

class SearchBar extends Component {
    // state = {
    //     query: '',
    //     results: []
    // }

    // getInfo

    // handleInputChange = () => {
    //     this.setState({
    //         query:this.search.value
    //     })
    // }
    
    render() {
        return (
            // <form>
            //     <input
            //         placeholder="search by teacher or by school"
            //         ref={input => this.search = input}
            //         onChange={this.handleInputChange}
            //     />
            //     <p>{this.state.query}</p>
            // </form>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search by teacher or by school"/>
                    <button type="submit" className="searchButton">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
