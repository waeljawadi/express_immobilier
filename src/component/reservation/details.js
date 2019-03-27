import React, { Component } from 'react';
import './details.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import Contactreservation from './contactreservation'
import {Link} from 'react-router-dom'

const BASE_URL = "http://localhost:3000/"

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        all:''
    }
}

    componentDidMount() {
        
    
        axios.get(`/getreservation/${this.props.match.params.id}`).then((res)=>this.setState({'all':res.data}))
      }

      handleClick() {
        let single_item =  Object.values(this.state.all)
        window.location.assign(`https://www.google.fr/maps/place/${single_item.map((item,index) => item.ville)}`);
      }

      
    render() 
    
{              
    let single_item =  Object.values(this.state.all)
    
   
        return ( <React.Fragment>


            <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 part1">
            <div className="ligne1res">
            {single_item.map((item,index) => <img src={BASE_URL+item.imageUrls[0]}/>)}


            {/* <img
                        src={BASE_URL + url}
                        className="img-rounded img-responsive"
                        alt="not available"
                      /> */}
            </div>           
            <div className="ligne2res">
                <p className="titrvilla">{single_item.map((item,index) => item.title)}</p>
                <p className="prxvilla"> {single_item.map((item,index) => item.prix)} TND</p>
                <p className="adresvilla">{single_item.map((item,index) => item.adresse)}</p>
            </div>
            <div className="ligne3">
            <p className='parag1res'> {single_item.map((item,index) => item.dcomplet)}</p>
            
        
            </div>
            <div className="ligne4">
            <p className="detaisres"> Details:</p>
            <hr></hr>
            <div className="row line4res">
             <div className="col-lg-6 col-md-12 col-sm-12">
             <p className="pdetails">Prix: <label className="prixdet">{single_item.map((item,index) => item.prix)}</label>TND</p>
             <p className="pdetails">Surface: <label className="surfacedet">{single_item.map((item,index) => item.surface)}</label> <b>m</b><sup>2</sup></p>
             <p className="pdetails">Adresse: <label className="adressedet">{single_item.map((item,index) => item.adresse)}</label> </p> 
             <p className="pdetails">Construit:<label className="adressedet">{single_item.map((item,index) => item.date_construction)} </label></p>
             </div>
             <div className="col-lg-6 col-md-12 col-sm-12">
            
             <p className="pdetails">Garage: {single_item.map((item,index) => 
                (item.garage == 0) ? "non" : 'oui'
                )}</p>
             <p className="pdetails">Salle de bain: {single_item.map((item,index) => 
                (item.salledebain == 0) ? "non" : 'oui'
                )}</p>
             </div>
            </div>
            </div>
            <div className="ligne4">
            <p className="detaisres"> Features:</p>
            <hr></hr>
            <div className="row line4res">
             <div className="col-lg-6 col-md-12 col-sm-12">
             <p className="pdetails"> <i className="fa fa-check"></i> Cable TV</p>
             <p className="pdetails"> <i className="fa fa-check"></i> Kitchen</p>
             <p className="pdetails"> <i className="fa fa-check"></i>Swimming Pool  </p> 
             <p className="pdetails"> <i className="fa fa-check"></i>Air condition</p>
             </div>
             <div className="col-lg-6 col-md-12 col-sm-12">
             <p className="pdetails"> <i className="fa fa-check"></i>Barbeque</p>
             <p className="pdetails"> <i className="fa fa-check"></i>Dryer</p>
             <p className="pdetails"> <i className="fa fa-check"></i>Laundry</p>
             <p className="pdetails"> <i className="fa fa-check"></i>WIFI</p>
             </div>
            </div>
            </div>
            <div className="ligne5">
            <p className="mapres"> Google Map:</p>
            <hr></hr>    
            <div>
           
                    <img onClick={this.handleClick.bind(this)} src="https://www.maptiler.com/img/map-home.svg" className="mapimg"/>

            </div>
            </div>

            <div className="ligne6">

           <Contactreservation 
           immo_id={this.props.match.params.id}
           immo = {[...this.state.all]}
           />

 




            </div>









            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 part2">
            <img src="http://www.investimmoclub.com/wp-content/uploads/2015/07/Infographic1-InvestissementsAlternatifs-1.png" className="imgres"/>           
            </div>



        </div>

        </React.Fragment> );
    }
}

 export default withRouter(Details);
