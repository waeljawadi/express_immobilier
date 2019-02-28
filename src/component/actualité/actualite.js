import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import  './actualite.css'

const Actualite = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
      
        <MDBCardImage className="img-fluid"  src ={props.item.image}  waves />
        <MDBCardBody>
        <label className="tag">Actualité</label>
          <MDBCardText className="descriptionactu"> {props.item.description} </MDBCardText>
          <MDBCardText className="dateactu"> {props.item.date} </MDBCardText>
          <MDBCardText className="authoractu"> {props.item.author} </MDBCardText>

         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Actualite;