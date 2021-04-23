import React, {useRef} from 'react';
import {BD} from "./config/firebase";
import './Mensaje';
import './Stylo.css';

function MensajeNuevo({agregarNuevoMensaje}){
    const nombreRef = useRef(null);
    const MensajeRef = useRef(null);
 

    const agregarMensaje = ()=>{
        const mensaje = {
            nombre: nombreRef.current.value,
            mensaje: MensajeRef.current.value,
           
        }

        BD.collection('Interactivo')
        .add(mensaje);

        nombreRef.current.value = "";
        MensajeRef.current.value = "";
       
        agregarNuevoMensaje(mensaje);
    }
    return (
        <div className="contenedor47">
            <div className="fila">
                <div className="columna">
                    Nombre:
                </div>
                <div className="columna">
                    <input type="text" ref={nombreRef} className="texto" />
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Mensaje:
                </div>
                <div className="columna">
                    <input type="text" ref={MensajeRef} className="texto" />
                </div>
            </div>

           
              

            <div className="fila">
                <div className="columna">
                    <button className="btn btn-info" onClick={agregarMensaje}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default MensajeNuevo;