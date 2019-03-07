import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Form} from 'react-bootstrap';
import Rating from './rate' 
import './avis.css'
// import TransitionablePortalExampleTransition from '../range/range'

const Avis = () => {
  return (
   
    <MDBCol>
      <MDBCard  id="aviss">
       <div className='headerreview' id="headeravis"> 
                     <p className="prate1"> Rate and Review </p>
       <p className="prate2">Express Immobilier, rue de commerce , Kairouan 3100</p></div>
        <MDBCardBody>
          <MDBCardTitle id="titleavis">Dear customer</MDBCardTitle>
          <MDBCardText id="textavis">
            Your review will be posted publicy on the web.
          </MDBCardText>
          <Rating/>
          <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label id="areaavis">Share details of your own experience at this place</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  </Form>
<button type="button" className="btn btn-success btn-lg btnpost">
             Post
            </button>        </MDBCardBody>
      </MDBCard>

      {/* <TransitionablePortalExampleTransition/> */}
    </MDBCol> 



  )
}

export default Avis;