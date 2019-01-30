import React  from 'react';


const Personas= (props) => {

    const { personas , deletePersona } = props;

    // const personaList = personas.map( p => {
    //   return (
    //     <div key={p.id} className="Personas">
    //       <h2>Componente Persona</h2>
    //       <div>Name : {p.name}</div>
    //       <div>Edad : {p.edad}</div>
    //       <div>Profesion : {p.profesion}</div>           
    //     </div>
    //   )
    // });
   

    return (
      <div className="personas-list">
        {
           personas.map( p => {
            return p.profesion === "qa" ? (
              <div key={p.id} className="Personas">
                <h2>Persona</h2>
                <button onClick={() => {deletePersona(p.id)} }> X </button>
                <div>Name : {p.name}</div>
                <div>Edad : {p.edad}</div>
                <div>Profesion : {p.profesion}</div>           
              </div>
            ) : null ;
          })
        }          
      </div>
    );
  
}

export default Personas;
