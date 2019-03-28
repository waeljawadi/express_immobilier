import React, { Component } from 'react';
import './catalogue.css'
import {Link} from 'react-router-dom'


const BASE_URL = "http://localhost:3000/"


class Catalogue extends Component{

    state={
        coeur:false
    }
    click=()=>
    {
        this.setState({
            coeur:!this.state.coeur
        })
    }
    render()
    {
    return(<div className="catalogue">
    
    <div className="imglist"><img src={BASE_URL+this.props.item.imageUrls[0]} className="imglist"/>
   
    
    <Link to={`/listecatalogue/reservation/${this.props.item._id}`}><button type="button" className="btn btn-success open">View Property</button></Link>
    </div>
   
    <i class="fa fa-heart" onClick={this.click} style={{color:(this.state.coeur)?'red':'white'}}></i>
    
    
    

    <div className="titlehouse"><h4 className="ptitlehouse"> {this.props.item.title}</h4></div>
    <div className="descriptionhouse"><p className="pdescriptionhouse"> {this.props.item.dcourte}</p></div>
    <div className="surfacehouse"><p className="psurfacehouse"> {this.props.item.surface} <b>m</b><sup>2</sup></p></div>
    <div className="prixhouse"><p className="pprixhouse"> {this.props.item.prix} TND</p></div>
   
    
    </div>
   
)
   }
}
 
export default Catalogue;