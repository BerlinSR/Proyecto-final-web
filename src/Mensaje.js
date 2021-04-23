import React from 'react';

import './Stylo.css';

function Mensaje({nombre, mensaje}){
    return(

        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{nombre}</h5>
        <p class="card-text">{mensaje}</p>
       
      </div>
    </div>
  </div>
 </div>

    );

    }

 export default Mensaje;