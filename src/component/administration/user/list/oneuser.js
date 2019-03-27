import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import '../../../administration/catalogue/list/listimmo.css'
import {Link} from 'react-router-dom'
import ModalPage from './modaluser';


class Oneuser extends Component {
 
    deleteuser= () => {
        const { item } = this.props
        axios
          .delete(`/deleteuser/${item._id}`)
          .then(() => this.props.deleteUsersReducer(item._id))
          .catch(err => alert(err))
      }

      

  render() {
    const { item } = this.props
    return (
      <React.Fragment>
        <tr>
          <td>
            <img className="logoliste" src="http://worldartsme.com/images/user-clipart-1.jpg" alt />
           
            <p>{item.username}</p>
        
            <span className="user-subhead">Admin</span>
          </td>
          <td>{item.lastname}</td>
          <td className="text-center">
            <span className="label label-default">{item.useremail} </span>
          </td>
          
          <td style={{ width: "20%" }}>
            <a href="#" className="table-link">
              <span className="fa-stack">
              <ModalPage name={this.props.item.username}
                         lastname={this.props.item.lastname}
                         email={this.props.item.useremail}/>
              
              </span>
            </a>
           
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x"  />
                <i
                  className="fa fa-trash-o fa-stack-1x fa-inverse"
                  onClick={this.deleteuser}
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
      deleteUsersReducer: _id => {
        dispatch({
          type: "REMOVE_USERS",
          _id
        })
      }
    }
  }
  export default connect(null, mapDispatchToProps)(Oneuser)
  