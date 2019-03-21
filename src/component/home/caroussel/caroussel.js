import React from "react"
import { Component } from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import OneItem from './oneitem'
import '../caroussel/caroussel.css'
import _css_ from "./caroussel.module.css"
import axios from 'axios'


class Caroussel extends Component {


constructor(props)
{
  super(props)
  this.state = {all : ''}
}

componentDidMount=()=>{
  axios.get('/getimmoavant').then(res=> this.setState({'all': res.data}))
}

componentDidUpdate=()=>{
  axios.get('/getimmoavant').then(res=> this.setState({'all': res.data}))
 
}

  render() {
    return (
      <React.Fragment>

<div className={`${_css_.margins}`}>

      <h4 className="widget-title text-center">
			<span>Featured Property</span>     
	        		</h4>
        <OwlCarousel
          className={`owl-theme container`}
          loop
          margin={10}
          items={3}
          nav
        >
         
      {[...this.state.all].map( el => <OneItem item={el} />)}
        
        </OwlCarousel>
     
        </div>

     
      </React.Fragment>
    )
  }
}
export default Caroussel
