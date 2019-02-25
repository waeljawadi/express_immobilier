import React, { Component } from 'react';
import {Row,Col} from  "react-bootstrap";



class  Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div className="find-home">
        <Row className="line1">
            <Col  lg={12} md={12} sm={12} >
            <h4>Avec Express-Immobilier : " Votre maison, on la voit comme vous " </h4>
            </Col>
        </Row>
        <Row className="line2">
            <Col className="type" lg={4} md={4} sm={12} >
            <select className="form-control">
            <option>Maison</option>
            <option>Terrain</option>
            <option>Maison & Terrain</option>
            </select>
            </Col>

            <Col className="prix" lg={4} md={4} sm={12}>

            <form>
            <div class="form-group">
            <label for="formControlRange">Prix:</label>
            <input type="range" class="form-control-range" id="formControlRange"/>
           </div>
           </form>

            </Col>
            
            <Col className="btn-search" lg={4} md={4} sm={12}>
            <button type="button" className="btn btn-secondary btn-lg"><i class="fa fa-search"></i>Search</button>
             

            </Col>







           </Row>

          




    



        </div>);
    }
}
 
export default Search;