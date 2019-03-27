import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import '../../administration/catalogue/list/listimmo.css'
import {Link} from 'react-router-dom'
import ModalPage from './modal';


class Onecontact extends Component {
 
    deletecontact = () => {
        const { item } = this.props
        axios
          .delete(`/deletecontact/${item._id}`)
          .then(() => this.props.deleteContactReducer(item._id))
          .catch(err => alert(err))
      }

      

  render() {
    const { item } = this.props
    return (
      <React.Fragment>
        <tr>
          <td>
            <img className="logoliste" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcA0JYjqdvYZjjIwr44v1OQS7nHe9IyuCSTlCnO2bwWrlcO8q" alt />
           
            <p>{item.contactname}</p>
        
            <span className="user-subhead">Admin</span>
          </td>
          <td>{item.contactemail}</td>
          <td className="text-center">
            <span className="label label-default">{item.contactmobile} </span>
          </td>
          <td>
            {item.contacttext}
          </td>
          <td style={{ width: "20%" }}>
            <a href="#" className="table-link">
              <span className="fa-stack">
              <ModalPage message={this.props.item.contacttext}
                         email={this.props.item.contactemail}/>
              
              </span>
            </a>
           
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x"  />
                <i
                  className="fa fa-trash-o fa-stack-1x fa-inverse"
                  onClick={this.deletecontact}
                />
              
               

              </span>
            </a>
            <a href="#" className="table-link">

            <a href={`mailto:${item.contactemail}`}>
              <span className="fa-stack">
                <i className="fa fa-reply-all"></i> 
              
              </span></a>
            </a>
           
         


          
          </td>
        </tr>




      </React.Fragment>
    )
  }
}


const mapDispatchToProps = dispatch => {
    return {
      deleteContactReducer: _id => {
        dispatch({
          type: "REMOVE_CONTACT",
          _id
        })
      }
    }
  }
  export default connect(null, mapDispatchToProps)(Onecontact)
  