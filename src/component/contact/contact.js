import React, { Component } from 'react';
import "./contact.css";
import { NotificationContainer, NotificationManager } from "react-notifications"
import axios from 'axios'



class Contact extends Component {
    constructor(props) {
        super(props)
        {
    
          this.state = { 
          
            contactname:'',
            contactemail:'',
            contactmobile:'',
            contacttext:'',
            disabled: true,
           
                       }
    
        }
      }








    componentDidMount() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.8575044, lng: 10.6085306 },
        zoom: 16
      });
    }

    handleChange = event => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({ [event.target.name]: event.target.value }, () => {
          if (
            re.test(this.state.contactemail) &&
            this.state.contactname.length > 6 &&
            (this.state.contactmobile.length) >=8 &&
            this.state.contacttext.length > 6
          ) {
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
                NotificationManager.info("Vous pouvez envoyer une autre fois")
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
           <div className="row maincontact">
           <div className="col-sm-12 col-md-12 col-lg-6 mapcont">
           
            <div className="col-sm-12 col-md-12 col-lg-12 mapcont2" id="map"></div>
          </div>
           <div className="col-sm-12 col-md-12 col-lg-6 seccont">
           <h1 className="titrecontact">Contactez-nous</h1>
           <form>
  <div className="col-10 form-group">
    <h5><label for="formGroupExampleInput">Nom et Prenom</label></h5>
     <input type="text"
            className="form-control form-control-lg border-top-0 border-left-0 border-right-0" 
            id="formGroupExampleInput"
            placeholder="Entrez votre nom" 
            name="contactname"
            value={this.state.contactname}
            onChange={this.handleChange}
            required
      
      
      
      
      />
  </div>
  <div className="col-10 form-group">
    <h5><label for="formGroupExampleInput2">E-mail</label></h5>
    <input type="email"
           className="form-control form-control-lg border-top-0 border-left-0 border-right-0" 
           id="formGroupExampleInput2"
           placeholder="Entrez votre email"
           name="contactemail"
           value={this.state.contactemail}
           onChange={this.handleChange}
           required/>
  </div>


  <div className="col-10 form-group">
  <h5><label for="formGroupExampleInput">Telephone</label></h5>
   <input type="tel" 
          className="form-control form-control-lg border-top-0 border-left-0 border-right-0"
          id="formGroupExampleInput"
          placeholder="Votre numéro de telephone" 
          name="contactmobile"
          value={this.state.contactmobile}
          onChange={this.handleNumbers}
          pattern="[+,0-9]*"
          required/>
  </div>
  <div className="col-10 form-group">
  <h5><label for="formGroupExampleInput">Message</label></h5>    
    <textarea className="form-control border-top-0 border-left-0 border-right-0"
              rows="5" 
              id="comment" 
              placeholder="Entrez votre message"
              name="contacttext"
              value={this.state.contacttext}
              onChange={this.handleChange}
              required></textarea>
  </div>
  <div className="col-10 text-center boutcontact">
  <input type="button"
   className="btn btn-lg btn-success"
    value="Envoyer"
    disabled={this.state.disabled}
    onClick={this.sendmessagecontact}
  />
  </div>
</form>
</div>


         
<NotificationContainer />   

        </div> );
    }
}
 
export default Contact;