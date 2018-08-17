import React, { Component } from 'react';
import Professor from './professor';
import Filter from './filter';
import Navbar from './navbar';


let professor_list = {
    user: {
      name: "Mike",
      professors: [
        {
          name: "Dr. Johnson",
          things: [
            { name: "English"},
            { name: "USU"},
            { name: "5 star rating"}
          ]
        },
        {
          name: "Dr. Thompson",
          things: [
            { name: "Math"},
            { name: "UVU"},
            { name: "2 star rating"}
          ]
        },
        {
          name: "Dr. Kelley",
          things: [
            { name: "Science"},
            { name: "BYU"},
            { name: "4 star rating"}
          ]
        },
        {
          name: "Dr. Larson",
          things: [
            { name: "Social Studies"},
            { name: "UofU"},
            { name: "3 star rating"}
          ]
        }
      ]
    }
  };
  class Homepage extends Component {
    constructor() {
      super();
      this.state = {
         serverData: {},
         filterString: ''
         }
    }
    componentDidMount() {
        this.setState({ serverData: professor_list });
    }
    render() {
      let professorToRender = this.state.serverData.user ? this.state.serverData.user.professors
        .filter(professor =>
        professor.name.toLowerCase().includes(
          this.state.filterString.toLowerCase())
        ) : []
      return (
        <div className="homepage"> 
            <Navbar/>
          {this.state.serverData.user ? 
            <div>

              
              <Filter onTextChange={text => {
                console.log(text);
                this.setState({filterString: text})}
              }/>
              {professorToRender.map(professor =>
                 <Professor professor={professor} /> 
              )}
            </div> : <h1>Page is loading</h1>
          }
        </div>
      );
    }
  }
  
  export default Homepage;
  