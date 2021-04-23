import './Stylo.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import Login from './Component/Login';
import {useState, useEffect} from 'react';

import Nav from './Component/Nav';
import {BD} from './config/firebase';
import Mensaje from './Mensaje';
import MensajeNuevo from './MensajeNuevo';




function App() {

 
 
  

  const [mensajes, setMensaje] = useState([]);

  const agregarNuevomensaje = (mensaje)=>{
    const tempContactos = mensajes.slice();
    tempContactos.push(mensaje);
    setMensaje(tempContactos);
  }

  useEffect(()=>{
    const listado = [];

    BD.collection('Interactivo')
    .get()
    .then( resultado => {
      resultado.forEach( mensaje=>{
        listado.push(mensaje.data());
      })
      setMensaje(listado);
    }).catch( error=>console.log(error));
  }, []);

  return (
    <body className="fondos">
     

     <Router>

     <Nav />
     <div className="container p-4">
       <Switch>
        <Route path="/Login"  component={Login} />
        
        
        </Switch>
      </div>

      </Router>  

      <div className="contenedor">

      <MensajeNuevo agregarNuevoMensaje = {agregarNuevomensaje} />
      
        {

          

          mensajes && mensajes.slice().reverse().map((mensajes, i)=>{
              const {nombre, mensaje} = mensajes;
              
              return (<Mensaje key={i} nombre={nombre} mensaje={mensaje}  />) 
              
          })
        }

      </div>

 
      

      </body>

   
    
  );
}


export default App;
