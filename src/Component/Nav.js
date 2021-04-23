import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import firebase from '../config/firebase';

export default class Nav extends Component {

    
    onSubmit = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result){

            var token = result.credential.accessToken;

            var user = result.user;

        }).catch(function (error){
            
         console.log(error);

        });

    };

    componentDiMount = () => {

        firebase.auth().onAuthStateChanged(function(user){

            if (user){
                console.log("Usuario registrado")
            } else {
                console.log("Usuario no registrado")
            }
        })
    }

    onLogout = () => {

        firebase.auth().signOut().then(function (){

        }).catch(function (error){

        });

        this.setState({
         
            isLogin:false
        
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                             </i> ChatBox
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

              

                            <li className="nav-item">
                            <button className="btn btn-link" onClick={this.onSubmit} type="button">Iniciar sesion

                         </button>
                            </li>

                            <li className="nav-item">
                            <button className="btn btn-link" onClick={this.onLogout} type="button">Cerrar sesion

                         </button>
                            </li>
                          
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
