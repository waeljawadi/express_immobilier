import React from "react"
import { Component } from "react"
import _css_ from "../../style/style.module.css"
import './style/style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import 'rc-input-number/assets/index.css';
class Ajout extends Component {


  constructor(props) {
    super(props)
    {
      this.state = { 
        reference: Math.trunc(Date.now() * Math.random() * Math.random()),
        title : '',
        prix : '' ,
        surface : '',
        date_construction:'',
        type_immobilier:''

       }
    }
  }

  handleNumbers = (evt) => {
    this.setState({ [evt.target.name]:(evt.target.validity.valid) ? evt.target.value : this.state[evt.target.name] });
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
                      <input  type="date" name="date_construction"  onChange={this.handlechange}
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
   <option value="" disabled selected>Choisir type d'immobilier</option>
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

                </form>
              </div>
              




             
    
            </TabPanel>
            <TabPanel>

              
            <div className="container ajouter">
                <form>
              <div className="row">
                
                  <div className="input-group input-group-icon">
                  <textarea class="form-control" placeholder="Description courte"></textarea>
                   
                 

                </div>
                <div className="input-group input-group-icon area_height">
                  <textarea placeholder="Description detaillé" class="form-control"></textarea>
                   
                 


                </div>
























                
</div>
</form>
</div>

            </TabPanel>
            <TabPanel>




            <div class="boxes">
  <input type="checkbox" id="vendu" />
  <label for="vendu">Vendu</label>
  <input type="checkbox" id="nouveaute" />
  <label for="nouveaute">Nouveauté</label>
  <input type="checkbox" id="desactiver" />
  <label for="desactiver">Desactiver</label>
  <input type="checkbox" id="enavant" />
  <label for="enavant">Mettre en avant</label>
</div>




            </TabPanel>
          </Tabs>

          <button type="button" class="btn btn-success">Ajouter immobilier</button>



        </div>
      </React.Fragment>
    )
  }
}

export default Ajout