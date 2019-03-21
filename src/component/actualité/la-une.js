import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import  './la-une.css'

const BASE_URL = "http://localhost:3000/"
const FirstActualite = (props) => {
  return (
    <MDBCol>
      <MDBCard>
      
        <MDBCardImage className="imgactu-fluid"  src ={BASE_URL+props.item.imageUrls[0]}  waves />
        <MDBCardBody>
        <label className="tag">Actualité</label>
          <MDBCardText className="descriptionactu"> {props.item.dcourte} </MDBCardText>
          <MDBCardText className="dateactu"> {props.item.date_postulation} </MDBCardText>
          <MDBCardText className="authoractu"> Posted by Administrator </MDBCardText>

         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default FirstActualite;