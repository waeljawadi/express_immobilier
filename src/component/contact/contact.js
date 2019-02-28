import React, { Component } from 'react';
import "./contact.css"


class Contact extends Component {
    state = {  }
    render() { 
        return ( <div className="backcontact">
           <div className="row maincontact">
           <div className="col-sm-12 col-md-12 col-lg-6 mapcont">
            <h1>MAP</h1>
          </div>
           <div className="col-sm-12 col-md-12 col-lg-6 seccont">
           <h1 className="titrecontact">Contactez-nous</h1>
           <form>
  <div className="col-10 form-group">
    <h5><label for="formGroupExampleInput">Nom et Prenom</label></h5>
    <input type="text" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput" placeholder="Entré votre nom" required/>
  </div>
  <div className="col-10 form-group">
    <h5><label for="formGroupExampleInput2">E-mail</label></h5>
    <input type="email" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput2" placeholder="entré votre email" required/>
  </div>
  <div className="col-10 form-group">
  <h5><label for="formGroupExampleInput">Telephone</label></h5>
   <input type="tel" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput" placeholder="votre numéro de telephone" required/>
  </div>
  <div className="col-10 form-group">
  <h5><label for="formGroupExampleInput">Message</label></h5>    
    <textarea className="form-control border-top-0 border-left-0 border-right-0" rows="5" id="comment" placeholder="Entrée votre message" required></textarea>
  </div>
  <div className="col-10 text-center boutcontact">
  <button type="submit" className="btn btn-secondary">Envoyer</button>
  </div>
</form>
</div>

</div>
            
            

        </div> );
    }
}
 
export default Contact;