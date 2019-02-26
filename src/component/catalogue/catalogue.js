import React, { Component } from 'react';
import './catalogue.css'

const Catalogue=(props)=>{
    return(<div className="catalogue">
    
    <div className="imglist"><img src ={props.item.image} className="imglist"/>
    
    
    <button type="button" className="btn btn-success open">View Property</button>
    </div>
   
    <i class="fa fa-heart"></i>
    
    
    

    <div className="titlehouse"><h4 className="ptitlehouse"> {props.item.title}</h4></div>
    <div className="descriptionhouse"><p className="pdescriptionhouse"> {props.item.description}</p></div>
    <div className="surfacehouse"><p className="psurfacehouse"> {props.item.surface} <b>m</b><sup>2</sup></p></div>
    <div className="prixhouse"><p className="pprixhouse"> {props.item.prix} TND</p></div>
   
    
    </div>
   
)
   
}
 
export default Catalogue;