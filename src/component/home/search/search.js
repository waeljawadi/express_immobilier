import React, { Component } from "react"
import "./search.css"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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

          <div className="col-lg-3 col-md-12 col-sm-12">
            <p className="txtline2">Type:</p>
            <select className="form-control">
              <option>Villa</option>
              <option>Appartement</option>
              <option>Villa & Appartement</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <p className="txtline2">Surface en mètre carré:</p>
            <select className="form-control">
              <option>Choisir la surface</option>
              <option>100</option>
              <option>150</option>
              <option>200</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
          <p className="txtline2">Prix en TND:</p>
            <select className="form-control">
              <option>Choisir le prix</option>
              <option>100 000 au max</option>
              <option>150 000 au max</option>
              <option>200 000 au max</option>
            </select>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <button type="button" className="btn btn-success btn-lg btnsearch">
              <i class="fa fa-search" />SEARCH
            </button>
          </div>
        
        </div>
      </div>
    )
  }
}

export default Search
