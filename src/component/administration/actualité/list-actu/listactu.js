import React from "react"
import { Component } from "react"
import Actu from './single-actu'
import {connect} from 'react-redux'
import axios from 'axios'

import _css_ from "../../style/style.module.css"
import '../../catalogue/list/listimmo.css'


class ListActu extends Component {
  componentDidMount=()=>{
    axios.get('/getactu').then((res)=>this.props.updateActuReducer(res.data))
  }

  componentDidUpdate=()=>{
    axios.get('/getactu').then((res)=>this.props.updateActuReducer(res.data))
}






  render() {
    const {listactu}= this.props

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
                        <th className="text-center"><span>Description Courte</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                       

                    { listactu.map((el,index)=><Actu item={el} key={index}  /> 
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
        listactu:state.actuReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateActuReducer:listactu=>
        {
            dispatch({
                type:'UPDATE_ACTU',
                listactu            })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ListActu);