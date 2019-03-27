import React, { Component } from "react"
import "./search.css"
import {Link} from 'react-router-dom'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type : '',
      surface_:''
    }
  }


  handlechange=(event)=>{

this.setState({[event.target.name]: event.target.value})

  }

  render() {
    return (
      <div className="find-home">



        <div className="row line1">
          <div className="col-lg-12 col-md-12 col-sm-12 slog">
            <p className="slogon">
              Avec Express-Immobilier : Votre maison, on la voit comme vous
            </p>
          </div>
        </div>



        <div className="row line2 container main-container">

          <div className="col-lg-4 offset-2 col-md-12 col-sm-12">
            <p className="txtline2">Type:</p>
            <select className="form-control" name="type" value={this.state.type} onChange={this.handlechange}  >
            <option>Choisir le type</option>
              <option>Villa</option>
              <option>Appartement</option>
              
            </select>
          </div>
 {/* {this.state.type} */} 

          {/* <div className="col-lg-3 col-md-12 col-sm-12">
            <p className="txtline2">Surface en mètre carré:</p>
            <select className="form-control" name="surface_" value={this.state.surface_} onChange={this.handlechange}>
              <option>Choisir la surface</option>
              <option>100 </option>
              <option>150 </option>
              <option>200 </option>
            </select>
          </div>


          <div className="col-lg-3 col-md-12 col-sm-12">
          <p className="txtline2">Prix en TND:</p>
            <select className="form-control">
              <option>Choisir le prix</option>
              <option>100 000 au max</option>
              <option>150 000 au max</option>
              <option>250 000 au max</option>
            </select>
          </div> */}



          <div className="col-lg-4 col-md-12 col-sm-12">
          <Link to={`/filtercatalogue/${this.state.type}`}>
           <button type="button" className="btn btn-success btn-lg btnsearch">
              <i class="fa fa-search" />SEARCH
            </button>
            </Link>
          </div>



        
        </div>
      </div>
    )
  }
}

export default Search
