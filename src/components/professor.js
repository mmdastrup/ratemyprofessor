import React, { Component } from "react";

class Professor extends Component {
    render() {
      let professor = this.props.professor
      return (
        <div>
          <img />
          <h3>{professor.name}</h3>
          <ul>
            {professor.songs.map(song =>
              <li>{song.name}</li>
            )}
          </ul>
        </div>
      );
    }
  } 

  export default Professor;
  