import React, { Component } from 'react';


class AddPersona extends Component {
    state={
        name:null,
        edad:null,
        profesion:null
    }
  
    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addPersona(this.state)
    }

  render() {
    return (
      <div className="AddPersona">
      <h2>Componente AddPersona</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange}/>

            <label htmlFor="edad">Edad</label>
            <input type="text" id="edad" onChange={this.handleChange}/>

            <label htmlFor="profesion">Profesion</label>
            <input type="text" id="profesion" onChange={this.handleChange}/>

            <button type="submit">Submit...</button>
        </form>
        
        
      </div>
    );
  }
}

export default AddPersona;
