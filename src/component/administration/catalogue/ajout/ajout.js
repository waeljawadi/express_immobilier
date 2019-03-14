import React from "react"
import { Component } from "react"

import _css_ from "../../style/style.module.css"
import "./style/style.css"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import axios from "axios"

import { Redirect } from "react-router-dom"

import "react-notifications/lib/notifications.css"
import { NotificationContainer, NotificationManager } from "react-notifications"



import ReactTooltip from "react-tooltip"
class Ajout extends Component {
  constructor(props) {
    super(props)
    {

      this.state = { 
       // _id: Math.trunc(Date.now() * Math.random() * Math.random()),
        title : '',
        prix : '' ,
        surface : '',
        date_construction:'',
        type_immobilier:'',
        adresse: '',
        ville:'',
        dcourte:'',
        dcomplet:'',
        vendu: 0,
        nouveaute: 0,
        desactiver: 0,
        enavant: 0,
       }

      this.state = {
        //    _id: Math.trunc(Date.now() * Math.random() * Math.random()),
        title: "",
        prix: "",
        surface: "",
        date_construction: "",
        type_immobilier: "",
        adresse: "",
        ville: "",
        dcourte: "",
        dcomplet: "",
        vendu: false,
        nouveaute: false,
        desactiver: false,
        enavant: false,
        garage: false,
        jardin: false,
        cuizine:true,
        salledebain: true
      }

    }
  }
  ProtectedComponent = () => {
    return <Redirect to="/admin" />
  }
  insert_immo = () => {
    axios
      .post("/postimmo", { ...this.state })
      .then(response =>
        (
          NotificationManager.success("Ajouter avec success", "", 3000),
          window.setTimeout(() => {
            NotificationManager.info("Vous pouvez ajouter une autre immobilier")
          }, 1500),
          this.setState({
            title: "",
            prix: "",
            surface: "",
            date_construction: "",
            type_immobilier: "",
            adresse: "",
            ville: "",
            dcourte: "",
            dcomplet: "",
            vendu: false,
            nouveaute: false,
            desactiver: false,
            enavant: false,
            garage: false,
            jardin: false,
            cuizine:true,
            salledebain: true
          }))

      )
      .catch(err => NotificationManager.error('Une erreur lors d\'ajout, essayer une autre fois', '') )
      
  }
  handleNumbers = evt => {
    this.setState({
      [evt.target.name]: evt.target.validity.valid
        ? evt.target.value
        : this.state[evt.target.name]
    })
  }
  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  toggleChange = e => {
    this.setState({

      [e.target.name]: ((this.state[e.target.name]) == 0) ?  1 :  0
    });

    
  }
  validation = () => {
    let valide = false
    let totalvalid,
      validetitle,
      valideprix,
      validesurface,
      valideadresse,
      valideville,
      valideimmobilier
    this.state.title.length >= 8 ? (validetitle = 1) : (validetitle = 0)
    this.state.prix.length > 3 ? (valideprix = 1) : (valideprix = 0)
    this.state.surface.length > 1 ? (validesurface = 1) : (validesurface = 0)
    this.state.adresse.length > 5 ? (valideadresse = 1) : (valideadresse = 0)
    this.state.ville.length > 3 ? (valideville = 1) : (valideville = 0)
    this.state.type_immobilier.length > 3
      ? (valideimmobilier = 1)
      : (valideimmobilier = 0)
    totalvalid =
      validetitle +
      valideprix +
      validesurface +
      valideville +
      valideadresse +
      valideimmobilier
    totalvalid == 6 ? (valide = true) : (valide = false)
    return valide

  }
  render() {
    return (
      <React.Fragment>
        <div className={`content-wrapper ${_css_.padds}`}>
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Description</Tab>
              <Tab>Etiquette</Tab>
              <Tab>Autre options</Tab>
              <Tab>Images</Tab>
            </TabList>
            <TabPanel>
              <div className="container ajouter">
                <div className="row">
                  <div className="col-full">
                    <div className="input-group input-group-icon">
                      <input
                        type="text"
                        placeholder="Untitulé du bien"
                        name="title"
                        value={this.state.title}
                        onChange={this.handlechange}
                        data-tip={`Required | minimum 8 caratére`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        placeholder="Prix du bien en dinar"
                        name="prix"
                        onChange={this.handleNumbers}
                        value={this.state.prix}
                        data-tip={`Required | prix min 1000 tnd`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="text"
                        pattern="[0-9]*"
                        placeholder="Surface du bien en m²"
                        onChange={this.handleNumbers}
                        name="surface"
                        value={this.state.surface}
                        data-tip={`Required | minimum 10 m²`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="date"
                        name="date_construction"
                        onChange={this.handlechange}
                        value={this.state.date_construction}
                        data-tip={`Optionnel | date de construction`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <select
                        name="type_immobilier"
                        value={this.state.type_immobilier}
                        onChange={this.handlechange}
                        data-tip={`Required`}
                      >
                        <option value="" disabled selected>
                          Choisir type d'immobilier
                        </option>
                        <option>Maison</option>
                        <option>Appartement</option>
                        <option>Villa</option>
                      </select>
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="text"
                        placeholder="Adresse"
                        onChange={this.handlechange}
                        name="adresse"
                        value={this.state.adresse}
                        data-tip={`Required | minimum caractére 6`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="text"
                        placeholder="Ville"
                        onChange={this.handlechange}
                        name="ville"
                        value={this.state.ville}
                        data-tip={`Required | minimum caractére 4`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
           
           
            
           
           
            <TabPanel>
              <div className="container ajouter">
                <form>
                  <div className="row">
                    <div className="input-group input-group-icon">
                      <textarea
                        onChange={this.handlechange}
                        className="form-control"
                        placeholder="Description courte"
                        name="dcourte"
                        value={this.state.dcourte}
                      />
                    </div>
                    <div className="input-group input-group-icon area_height">
                      <textarea
                        placeholder="Description detaillé"
                        className="form-control"
                        name="dcomplet"
                        value={this.state.dcomplet}
                        onChange={this.handlechange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </TabPanel>
           
        
           
            <TabPanel>
              <div className="boxes">
                <input
                  type="checkbox"
                  id="vendu"
                  name="vendu"
                  checked={this.state.vendu}
                  onChange={this.toggleChange}
                />
                <label for="vendu">Vendu</label>

                <input type="checkbox" id="nouveaute" name="nouveaute"  checked={this.state.nouveaute} onChange={this.toggleChange} />

                <input
                  type="checkbox"
                  id="nouveaute"
                  name="nouveaute"
                  checked={this.state.nouveaute}
                  onChange={this.toggleChange}
                />

                <label for="nouveaute">Nouveauté</label>
                <input
                  type="checkbox"
                  id="desactiver"
                  name="desactiver"
                  checked={this.state.desactiver}
                  onChange={this.toggleChange}
                />
                <label for="desactiver">Desactiver</label>
                <input
                  type="checkbox"
                  id="enavant"
                  name="enavant"
                  checked={this.state.enavant}
                  onChange={this.toggleChange}
                />
                <label for="enavant">Mettre en avant</label>
              </div>
            </TabPanel>
          

            <TabPanel>

              <div className="boxes">
                <input
                  type="checkbox"
                  id="garage"
                  name="garage"
                  checked={this.state.garage}
                  onChange={this.toggleChange}
                />
                <label for="garage">Garage</label>
              </div>
              <div className="boxes">
                <input
                  type="checkbox"
                  id="jardin"
                  name="jardin"
                  checked={this.state.jardin}
                  onChange={this.toggleChange}
                />
                <label for="jardin">Jardin</label>
              </div>
              <div className="boxes">
                <input
                  type="checkbox"
                  id="cuizine"
                  name="cuizine"
                  checked={this.state.cuizine}
                  onChange={this.toggleChange}
                />
                <label for="cuizine">Cuizine</label>
              </div>
              <div className="boxes">
                <input
                  type="checkbox"
                  id="salledebain"
                  name="salledebain"
                  checked={this.state.salledebain}
                  onChange={this.toggleChange}
                />
                <label for="salledebain">Salle de bain</label>
              </div>
            
            </TabPanel>


            <TabPanel>



            </TabPanel>
          
          </Tabs>
          <button
            type="submit"
            disabled={!this.validation()}
            className="btn btn-success"
            onClick={this.insert_immo}
          >
            Ajouter immobilier
          </button>
        </div>
        <NotificationContainer />
        <ReactTooltip />
      </React.Fragment>
    )
  }
}
export default Ajout
