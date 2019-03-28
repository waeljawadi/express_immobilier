import React, { Component } from 'react';
import Avis from '../../../assets/pictures/slide/Capture.PNG'
import './avis-client.css'
import {Link} from 'react-router-dom'

class AvisClient extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

            <center>
                <p className="p1avis">
                Get great reviews by making it easy for customers to leave <br></br>reviews
                </p>
                <p className="p2avis">
                Tap into your customers' desire to share <br></br> Their experiences and build your brand.
                </p>
                </center>
                <div className="row imgaviss">
                <div className="col-lg-12 col-md-12 col-sm-12 logoavis"> 
                
                  <img src={Avis} className="imgavis"/> 
                  <Link  to='/avis'> <button type="button" class="btn btn-success btnavis">Leave a review</button>
                 </Link>
                </div>
                
                </div>
              




           
        </div> );
    }
}
 
export default AvisClient;