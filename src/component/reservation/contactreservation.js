import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './details.css'
import { NotificationContainer, NotificationManager } from "react-notifications"
import axios from 'axios'
import {Link} from 'react-router-dom'
class Contactreservation extends React.Component {
  state = {
    contactname:'',
    contactemail: '',
    contacttext: `Je reserve cet immo - ID: ${this.props.immo_id}`,
    contactmobile:'', 
    disabled:true  
  };

  



  changeHandler = event => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({ [event.target.name]: event.target.value }, () => {
          if (
            re.test(this.state.contactemail) &&
            this.state.contactname.length > 6 &&
            (this.state.contactmobile.length) >=8 
            
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



      sendmessagecontact = () => {
        axios
          .post("/postcontact", { ...this.state })
          .then(
            response => (
              NotificationManager.success("Envoie avec success", "", 3000),
              window.setTimeout(() => {
                NotificationManager.info("Merci pour votre visite")
              }, 1500),
              this.setState({
               
                contactname:'',
            contactemail:'',
            contactmobile:'',
            contacttext:'',
            disabled: true,
              })
            )
          )
          .catch(err =>
            NotificationManager.error(
              "Une erreur lors de l'envoi, essayer une autre fois",
              ""
            )
          )
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
                value={this.state.contactname}
                name="contactname"
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
                value={this.state.contactemail}
                name="contactemail"
                onChange={this.changeHandler}
                type="contactemail"
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
                value={this.state.contactmobile}
                onChange={this.handleNumbers}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="contactmobile"
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
                value={this.state.contacttext}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="contacttext"
                placeholder="Taper votre contacttext"
                required
              />
            </MDBCol>
            
            </MDBRow>
        
          
           <MDBBtn color="primary"
             disabled={this.state.disabled} 
             type="button"
           onClick={this.sendmessagecontact}>
            Reserver
          </MDBBtn>
        </form>
        <NotificationContainer />  
      </div>
    );
  }
}

export default Contactreservation;