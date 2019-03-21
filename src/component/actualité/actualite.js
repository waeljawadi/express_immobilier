import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import  './actualite.css'
import {Link} from 'react-router-dom'

const BASE_URL = "http://localhost:3000/"
const Actualite = (props) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
      
        <MDBCardImage className="img-fluid"  src ={BASE_URL+props.item.imageUrls[0]}  waves />
        <MDBCardBody>
        <Link to={`/listeactualite/detailactualite/${props.item._id}`}><label className="tag">Read more</label></Link>
          <MDBCardText className="descriptionactu"> {props.item.dcourte} </MDBCardText>
          <MDBCardText className="dateactu"> {props.item.date_postulation} </MDBCardText>
          <MDBCardText className="authoractu"> Posted by Administrator</MDBCardText>

         
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Actualite;