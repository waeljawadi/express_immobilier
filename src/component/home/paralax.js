import React, { Component } from 'react';
import './paralax.css';
import logo1 from '../../assets/pictures/head-logo.png'; 
class Paralax extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="parralax">

<div class="col-lg-12">

        <h1 className=" text1parax center">
        NEVER MISS OUT ON YOUR DREAM AGAIN!
              </h1>   
              <h2 className="tetxt2parax center">Find your dream house now
                </h2>  
            </div>

        </div> );
    }
}
 
export default Paralax;