import React, { Component } from 'react';


class Personas extends Component {

  
  render() {
    const {personas } = this.props;

    const PersonaList = personas.map( p => {
      return (
        <div key={p.id} className="Personas">
          <h2>Componente Persona</h2>
          <div>Name : {p.name}</div>
          <div>Edad : {p.edad}</div>
          <div>Profesion : {p.profesion}</div>           
        </div>
      )
    });

    return (
      <div className="personas-list">
        {PersonaList}          
      </div>
    );
  }
}

export default Personas;
