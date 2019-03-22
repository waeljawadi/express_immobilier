import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import '../../catalogue/list/listimmo.css'
import {Link} from 'react-router-dom'
import ActionButton from 'antd/lib/modal/ActionButton';


class Actu extends Component {

  deleteactualite = () => {
    const { item } = this.props
    axios
      .delete(`/deleteactu/${item._id}`)
      .then(() => this.props.deleteActuReducer(item._id))
      .catch(err => alert(err))
  }



  render() {
    const { item } = this.props
    return (
      <React.Fragment>
        <tr>
          <td style={{ width: "15%" }} >
            <img className="logoliste" src="https://expressimmoprestige.be/images/logofb.jpg" alt />
           
              <p></p>
        
            <span className="user-subhead">Admin</span>
          </td>
          <td className="text-center" style={{ width: "15%" }}>{item.date_postulation}</td>
          <td className="text-left" style={{ width: "45%" }}>
            <span className="label label-default" >
           {item.dcourte}
            </span>
          </td>
         
          <td className="text-center" style={{ width: "15%" }}>
            <a href="#" className="table-link">
              <span class="fa-stack">
                <i class="fa fa-camera fa-stack-1x" />
                <i class="fa fa-ban fa-stack-2x" 
                
                />
              </span>
            </a>
            <a href="#" className="table-link">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <Link to={`/admin/actualité/editactu/${item._id}`}> <i className="fa fa-pencil fa-stack-1x fa-inverse" /></Link>
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i
                  className="fa fa-trash-o fa-stack-1x fa-inverse"
                  onClick={this.deleteactualite}
                />
               
               

              </span>
            </a>
            
          </td>
        </tr>




      </React.Fragment>
    )
  }
}




const mapDispatchToProps = dispatch => {
    return {
      deleteActuReducer: _id => {
        dispatch({
          type: "REMOVE_ACTU",
          _id
        })
      }
    }
  }
  export default connect(null, mapDispatchToProps)(Actu)
  
