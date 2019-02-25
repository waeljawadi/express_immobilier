import React, { Component } from 'react';
import './carreaux.css'
import submission01 from './submission01.png'
import submission02 from './submission02.png'
import submission03 from './submission03.png'

class Carreaux extends Component {
    state = {  }
    render() { 
        return ( <div className="row carreaux">
        <div className="col-sm-3 carreaux1">
        <img className="imgcarreaux" src={submission01}/>
        <h4>Login</h4>
        <p>Login to your account</p>
        </div>
        <div className="col-sm-3 carreaux2">
        <img className="imgcarreaux" src={submission02}/>
        <h4>Soumettre</h4>
        <p>Submit your properties</p>
        </div>
        <div className="col-sm-3 carreaux2">
        <img className="imgcarreaux" src={submission03}/>
        <h4>Publish</h4>
        <p>Publish professional and private <br/>real estate listings</p>
        </div>

        </div> );
    }
}
 
export default Carreaux;