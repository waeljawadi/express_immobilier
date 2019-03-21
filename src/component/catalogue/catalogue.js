import React, { Component } from 'react';
import './catalogue.css'
import {Link} from 'react-router-dom'


const BASE_URL = "http://localhost:3000/"


const Catalogue=(props)=>{
    return(<div className="catalogue">
    
    <div className="imglist"><img src={BASE_URL+props.item.imageUrls[0]} className="imglist"/>
   
    
    <Link to={`/listecatalogue/reservation/${props.item._id}`}><button type="button" className="btn btn-success open">View Property</button></Link>
    </div>
   
    <i class="fa fa-heart"></i>
    
    
    

    <div className="titlehouse"><h4 className="ptitlehouse"> {props.item.title}</h4></div>
    <div className="descriptionhouse"><p className="pdescriptionhouse"> {props.item.dcourte}</p></div>
    <div className="surfacehouse"><p className="psurfacehouse"> {props.item.surface} <b>m</b><sup>2</sup></p></div>
    <div className="prixhouse"><p className="pprixhouse"> {props.item.prix} TND</p></div>
   
    
    </div>
   
)
   
}
 
export default Catalogue;