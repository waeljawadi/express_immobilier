import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



class ModalUser extends Component {
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
        <MDBModalHeader toggle={this.toggle}>Info</MDBModalHeader>
        <MDBModalBody>
          <p>Nom: {this.props.name}</p>
          <p>Prénom: {this.props.lastname}</p>
          <p>E-mail: {this.props.email}</p>  
  </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={this.toggle}>Fermer</MDBBtn>
          
          
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}




export default ModalUser