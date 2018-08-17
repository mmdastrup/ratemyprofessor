import React, { Component } from "react";

class Professor extends Component {
    render() {
      let professor = this.props.professor
      return (
        <div>
          <img />
          <h3>{professor.name}</h3>
          <ul>
            {professor.things.map(thing =>
              <li>{thing.name}</li>
            )}
          </ul>
        </div>
      );
    }
  } 

  export default Professor;
  