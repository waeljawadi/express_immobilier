import React, { Component } from 'react';

const Catalogue=(props)=>{
    return(<div className="catalogue">
    <div><img src ={props.item.image} className="imglist"/></div>
    <div className="titlehouse"><p> {props.item.title}</p></div>
    <div className="descriptionhouse"><p> {item.description}</p></div>
   
    
    </div>
   
)
   
}
 
export default Catalogue;