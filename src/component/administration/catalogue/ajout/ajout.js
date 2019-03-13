import React from "react"
import { Component } from "react"
import _css_ from "../../style/style.module.css"
import './style/style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import 'rc-input-number/assets/index.css';
import axios from 'axios'
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
    }
  }
  
insert_immo = () =>
{
        axios.post('/postimmo',{...this.state})
        .then( console.log('Base de donner mis a jour '))
        .catch((err)=> console.log("erreur pendant l'insertion")) 
        
}


  handleNumbers = (evt) => {
    this.setState({ [evt.target.name]:(evt.target.validity.valid) ? evt.target.value : this.state[evt.target.name] });
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  toggleChange = (e) => {
    this.setState({
      [e.target.name]: ((this.state[e.target.name]) == 0) ?  1 :  0
    });
  }


  render() {
    console.log({...this.state})

    return (
      <React.Fragment>
        <div className={`content-wrapper ${_css_.padds}`}>
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Description</Tab>
              <Tab>Etiquette</Tab>
              <Tab>Images</Tab>
            </TabList>
            <TabPanel> 
              <div className="container ajouter">
                <form>
                <div className="row">
                    <div className="col-half">
                      <div className="input-group input-group-icon">
                        <input
                          type="text"
                          placeholder="_id"
                          name="_id"
                          value={`_id: ${this.state._id}`}
                          disabled
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
                          placeholder="Untitulé du bien"
                          name="title"
                          value={this.state.title}
                          onChange={this.handlechange}
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
                        />
                        <div className="input-icon">
                          <i className="fa fa-user" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="container ajouter">
                <form>
                  <div className="row">
                    <div className="input-group input-group-icon">
                      <textarea
                        onChange={this.handlechange}
                        class="form-control"
                        placeholder="Description courte"
                        name="dcourte"
                        value={this.state.dcourte}
                      />
                    </div>
                    <div className="input-group input-group-icon area_height">
                      <textarea
                        placeholder="Description detaillé"
                        class="form-control"
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
              <div class="boxes">
                <input type="checkbox" id="vendu"  name="vendu"  checked={this.state.vendu} onChange={this.toggleChange} />
                <label for="vendu">Vendu</label>
                <input type="checkbox" id="nouveaute" name="nouveaute"  checked={this.state.nouveaute} onChange={this.toggleChange} />
                <label for="nouveaute">Nouveauté</label>
                <input type="checkbox" id="desactiver" name="desactiver" checked={this.state.desactiver} onChange={this.toggleChange} />
                <label for="desactiver">Desactiver</label>
                <input type="checkbox" id="enavant" name="enavant" checked={this.state.enavant} onChange={this.toggleChange} />
                <label for="enavant">Mettre en avant</label>
              </div>
            </TabPanel>
          </Tabs>
          <button type="button" class="btn btn-success" onClick={this.insert_immo}>
            Ajouter immobilier
          </button>
        </div>
      </React.Fragment>
    )
  }
}
export default Ajout