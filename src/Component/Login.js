
import React, {Component} from 'react';
import firebase from '../config/firebase';

class GoogleLogin extends Component {


    onSubmit = () => {

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result){

            var token = result.credential.accessToken;

            var user = result.user;

        }).catch(function (error){
            
         console.log(error);

        });

    }

    render() {



        return(
            <div className="">


         <button onClick={this.onSubmit} type="button">Iniciar sesion

         </button>
                

            </div>
            
        );
    }

  }
  export default GoogleLogin;