import React from "react"
import { Component } from "react"
import {connect} from 'react-redux'
import axios from 'axios'
import Oneuser from './oneuser'

import _css_ from '../../../administration/style/style.module.css'
import '../../../administration/catalogue/list/listimmo.css'


class UsersList extends Component {
  componentDidMount=()=>{
    axios.get('/getusers').then((res)=>this.props.updateUsersReducer(res.data))
  }

  componentDidUpdate=()=>{
    axios.get('/getusers').then((res)=>this.props.updateUsersReducer(res.data))
}






  render() {
    const {listusers}= this.props

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
                        <th><span>lastname</span></th>
                        <th className="text-center"><span>Email</span></th>
                      
                       
                      </tr>
                    </thead>
                    <tbody>
                      
                       

                    { listusers.map((el,index)=><Oneuser item={el} key={index}  /> 
                                           
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
        listusers:state.userReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateUsersReducer:listusers=>
        {
            dispatch({
                type:'UPDATE_USERS',
                listusers         })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(UsersList);