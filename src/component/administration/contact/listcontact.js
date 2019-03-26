import React from "react"
import { Component } from "react"
import Onecontact from './onecontact'
import ModalPage from './modal'
import {connect} from 'react-redux'
import axios from 'axios'

import _css_ from '../../administration/style/style.module.css'
import '../../administration/catalogue/list/listimmo.css'


class ContactList extends Component {
  componentDidMount=()=>{
    axios.get('/getcontact').then((res)=>this.props.updateContactReducer(res.data))
  }

  componentDidUpdate=()=>{
    axios.get('/getcontact').then((res)=>this.props.updateContactReducer(res.data))
}






  render() {
    const {listcontact}= this.props

    return (
      <React.Fragment>
<div className={`content-wrapper ${_css_.padds}`}>

        
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th><span>Contact</span></th>
                        <th><span>Email</span></th>
                        <th className="text-center"><span>Mobile</span></th>
                        <th className="text-center"><span>Message</span></th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      
                       

                    { listcontact.map((el,index)=><Onecontact item={el} key={index}  /> 
                                           
        )}




                       
                     
                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>
          </div>
        </div>
  


      </React.Fragment>
    )
  }
}



const mapStateToProps=(state)=>
{
    return {
        listcontact:state.contactReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateContactReducer:listcontact=>
        {
            dispatch({
                type:'UPDATE_CONTACT',
                listcontact           })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ContactList);