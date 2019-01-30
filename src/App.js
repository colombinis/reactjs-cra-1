import React, { Component } from 'react';
import Personas from './components/Personas';


class App extends Component {
  state = {
    personas:[
      {id:1, name:"Sebastian", edad:"42", profesion:"dev"},
      {id:2, name:"Ale", edad:"33", profesion:"qa"},
      {id:3, name:"Colo", edad:"22", profesion:"dev"}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Starting from CRA</h1>
         
        <Personas personas={this.state.personas}  />
        
        
      </div>
    );
  }
}

export default App;
