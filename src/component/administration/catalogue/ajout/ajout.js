import React from "react"
import { Component } from "react"
import _css_ from "../../style/style.module.css"
import './style/style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import 'rc-input-number/assets/index.css';
import InputNumber from 'rc-input-number';


class Ajout extends Component {


  constructor(props) {
    super(props)
    {
      this.state = { 
        reference: Math.trunc(Date.now() * Math.random() * Math.random()),
        title : '',
        prix : ''
       }
    }
  }

handlechange = (event) =>
{
  this.setState({[event.target.name]:event.target.value})
}
  render() {

    


    return (
      <React.Fragment>
<div className={`content-wrapper ${_css_.padds}`}>
<Tabs>
    <TabList>
      <Tab>Information</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>   
<div class="container ajouter">
  <form>
    <div class="row">
    <div class="col-half">
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Reference" name="reference" value={this.state.reference} disabled/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
     </div>
     <div class="col-half">
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handlechange} />
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
     </div>

     <div class="col-half">
      <div class="input-group input-group-icon">
        <input type="text" pattern="\d*" placeholder="Prix en dinars" name="prix" value={this.state.prix} onChange={this.handlechange} />
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
     </div>

     <InputNumber
          min={0}
          value={this.state.prix}
          onChange={this.handlechange}
          name="prix"
        />

    </div>
  </form>
</div>
    </TabPanel>
    <TabPanel>dfgdfg</TabPanel> 
  </Tabs>
</div>

      </React.Fragment>
    )
  }
}

export default Ajout
