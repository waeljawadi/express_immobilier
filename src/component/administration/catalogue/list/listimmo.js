import React from "react"
import { Component } from "react"
import SingleImmo from './single_immo'
import {connect} from 'react-redux'
import axios from 'axios'

import _css_ from "../../style/style.module.css"
import './listimmo.css'


class Listimmo extends Component {
  componentDidMount=()=>{
    axios.get('/getimmo').then((res)=>this.props.updateImmoReducer(res.data))
  }

  componentDidUpdate=()=>{
    axios.get('/getimmo').then((res)=>this.props.updateImmoReducer(res.data))
   
}






  render() {
    const {listimmo}= this.props

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
                        <th><span>User</span></th>
                        <th><span>Created</span></th>
                        <th className="text-center"><span>Status</span></th>
                        <th><span>Adresse</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                       

                    { listimmo.map((el,index)=><SingleImmo item={el} key={index}  /> 
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
        listimmo:state.immoReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateImmoReducer:listimmo=>
        {
            dispatch({
                type:'UPDATE_IMMO',
                listimmo            })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Listimmo);