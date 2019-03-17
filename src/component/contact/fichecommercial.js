import React, { Component } from 'react';
import "./fichecommercial.css";
import commercial from "./commercial.jpg";

class Fichecommercial extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div>
<div className="row contactvendeur">
<div className="col-sm-12 col-md-12 col-lg-4 contactvendeur1">
<img className="commercialtof" src={commercial} />
</div>
<div className="col-sm-12 col-md-12 col-lg-4 contactvendeur2">
<h3>Moamed Ben salah</h3>
<h5>Poste:</h5>
<h5>Conseiller commercial</h5>
<p>
notre conseiller commercial immobilier vous accompagne via plusieurs actions. Il fait les estimations de biens, signe des mandats, fait visiter les biens et participe aux négociations financières.
</p>
<ul>
                <li>
                  <i className="fa fa-map-marker" /> immeuble x route y{" "}
                </li>
                <li>
                  <i className="fa fa-phone" /> 98796859
                </li>
                <li>
                  <i className="fa fa-fax" /> 98796859
                </li>
                <li>
                  <i className="fa fa-envelope" /> immo@planet.tn
                </li>
              </ul>
</div>
<div className="col-sm-12 col-md-12 col-lg-4 contactvendeur3">
<h5> Contacter Moamed Ben salah</h5>
<form>
  <div className="col-10 form-group">
    
    <input type="text" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput" placeholder="Nom & Prenom" required/>
  </div>
  <div className="col-10 form-group">
    
    <input type="email" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput2" placeholder="Email" required/>
  </div>
  <div className="col-10 form-group">
  
   <input type="tel" className="form-control form-control-lg border-top-0 border-left-0 border-right-0" id="formGroupExampleInput" placeholder="Telephone" required/>
  </div>
  <div className="col-10 form-group">
    
    <textarea className="form-control border-top-0 border-left-0 border-right-0" rows="5" id="comment" placeholder="Message" required></textarea>
  </div>
  <div className="col-10 text-center boutcontact">
  <button type="submit" className="btn btn-lg btn-secondary">Envoyer</button>
  </div>
</form>
</div>
 
  </div>
</div>

        </div> );
    }
}
 
export default Fichecommercial;