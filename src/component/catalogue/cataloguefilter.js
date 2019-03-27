import React, { Component } from 'react';
import './catalogue.css'
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import axios from "axios"
import Catalogue from './catalogue';
import './list-catalogue.css'
class FilterCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allfilter:''
         }
    }

    componentDidMount() {
        axios
          .get(`/searchimmo/${this.props.match.params.type}`)
          .then(res => this.setState({ allfilter: res.data }))
    }
    // componentDidUpdate() {
    //     axios
    //       .get(`/searchimmo/${this.props.match.params.type}`)
    //       .then(res => this.setState({ allfilter: res.data }))
    // }
          render() { 
            return ( 
                <div>
                <div className="row ctlg container-fluid">
    
                {[...this.state.allfilter].map( el => <div className="col-lg-4 col-md-6 col-sm-12 ctlg1">< Catalogue item={el} />
                </div>
               
                )}
    
    </div>
            </div>);
        }
}
 
export default withRouter(FilterCatalogue) ;