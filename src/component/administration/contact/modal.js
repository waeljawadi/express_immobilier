import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



class ModalPage extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
    const { item } = this.props
  return (
    <MDBContainer>
      <i className="fa fa-envelope-square" onClick={this.toggle} ></i>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Message</MDBModalHeader>
        <MDBModalBody>
          <p>From: {this.props.email}</p>
         <p> {this.props.message}  </p>   
  </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={this.toggle}>Fermer</MDBBtn>
          <a href={`mailto:${this.props.email}`}>
          <MDBBtn color="primary" >Répondre</MDBBtn></a>
          
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}




export default ModalPage