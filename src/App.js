import React, { Component } from 'react';
import Personas from './components/Personas';
import AddPersona from './components/AddPersona';


class App extends Component {
  state = {
    personas:[
      {id:1, name:"Sebastian", edad:"42", profesion:"dev"},
      {id:2, name:"Ale", edad:"33", profesion:"qa"},
      {id:3, name:"Colo", edad:"22", profesion:"dev"}
    ]
  }

  addPersona = (persona) =>{
    persona.id= Math.random(); //inject id to the object
    this.setState({
      personas: [...this.state.personas, persona]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Starting from CRA</h1>
         
        <Personas personas={this.state.personas}  />
        <AddPersona addPersona={this.addPersona}/>
        
      </div>
    );
  }
}

export default App;
