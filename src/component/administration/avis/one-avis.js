import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import axios from 'axios'

class OneAvis extends Component {
    constructor(props) {
        super(props);
        this.state = { star:"" }
    }





    isactiveavis=()=>
    {
      const {item}=this.props
       axios.put(`/isactiveavis/${item._id}/${item.enattente}`) 
      .then() 
      .catch()
    }


    render() { 
        const { item } = this.props
        const { rating } = { ...this.props.item }
        var x = ""
        for (var i = 0; i < rating; i++) {
          x = x + "⭐"
        }

return (
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }} id="cardavis">
    <MDBCardBody>
      <MDBCardTitle id="titleavis">{x}</MDBCardTitle>
      <MDBCardTitle tag="h6" sub className="mb-2 text-muted" id="nameavis">
      <p className="infoavis">Name: {this.props.item.name}</p>
      <p className="infoavis">Email: {item.email}</p>
     
      </MDBCardTitle>
      <MDBCardText tag="h6" id="textavis">Message: {item.message}
      </MDBCardText>
      <button type="button" className="btn btn-primary btn-lg " id="bntactiv"  onClick={this.isactiveavis} >
             Valider
            </button>
     
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};
}
export default OneAvis;