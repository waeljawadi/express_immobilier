import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './details.css'
import {Link} from 'react-router-dom'
class Contactreservation extends React.Component {
  state = {
    fullname:'',
    email: '',
    message: `Je reserve cet immo - ID: ${this.props.immo_id}`,
    telephone:'', 
    disabled:true  
  };

  



  changeHandler = event => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({ [event.target.name]: event.target.value }, () => {
          if (
            re.test(this.state.email) &&
            this.state.fullname.length > 6 &&
            (this.state.telephone.length) >=8 
            
          )
           {
            this.setState({ disabled: false })
          } else {
            this.setState({ disabled: true })
          }
        })
      }

      handleNumbers = evt => {
        this.setState({
          [evt.target.name]: evt.target.validity.valid
            ? evt.target.value
            : this.state[evt.target.name]
        })
      }

  render() {
  
    return (
      <div>
        <form className="contactsform"> 
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Nom et prénom
              </label>
              <input
                value={this.state.fullname}
                name="fullname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Full name"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                E-mail
              </label>
              <input
                value={this.state.email}
                name="email"
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Email"
                required
              />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Téléphone
              </label>
              <input
                value={this.state.telephone}
                onChange={this.handleNumbers}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="telephone"
                placeholder="Your phone"
              />
            </MDBCol>
          
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Message
              </label>
              <input
              disabled
                value={this.state.message}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="message"
                placeholder="Taper votre message"
                required
              />
            </MDBCol>
            
            </MDBRow>
        
          <Link to={`/contact/${this.state.fullname}/${this.state.email}/${this.state.telephone}/${this.state.message}`}>
           <MDBBtn color="primary"
             disabled={this.state.disabled} 
           type="submit">
            Reserver
          </MDBBtn></Link>
        </form>
      </div>
    );
  }
}

export default Contactreservation;