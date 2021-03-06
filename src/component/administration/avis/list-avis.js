import React, { Component } from 'react';
import OneAvis from './one-avis'
import axios from 'axios'
import _css_ from "../style/style.module.css"

import './list-avis.css'

class Listaviss extends Component {
    constructor(props) {
        super(props);
        this.state = {allavis : ''}
    }


    componentDidMount=()=>{
        axios.get('/getavisenattente').then(res=> this.setState({'allavis': res.data}))
      }
      
      componentDidUpdate=()=>{
        axios.get('/getavisenattente').then(res=> this.setState({'allavis': res.data}))
       
      }

    render() { 
        return ( 
            <div className={`content-wrapper ${_css_.padds}`}>
            <div className="row listaviss container-fluid">

            {[...this.state.allavis].map( el => <div className="col-lg-4 col-md-6 col-sm-12 oneaviss"><OneAvis item={el} />
            </div>
           
            )}

</div>
        </div>);
    }
}
 
export default Listaviss;