import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import './listimmo.css'
import {Link} from 'react-router-dom'


class SingleImmo extends Component {
  deleteimmobilier = () => {
    const { item } = this.props
    axios
      .delete(`/deleteimmo/${item._id}`)
      .then(() => this.props.deleteImmoReducer(item._id))
      .catch(err => alert(err))
  }
  statue = () => {
    if (this.props.item.desactiver == 0) return "disponible"
    else return "indisponible"
  }


//   componentDidUpdate=()=>{
//     axios.get('/getimmo').then((res)=>this.props.updateImmoReducer(res.data))
// }


  isactive=()=>
    {
      const {item}=this.props
       axios.put(`/isactive/${item._id}/${item.desactiver}`) 
      .then() 
      .catch()
    }






  render() {
    const { item } = this.props
    return (
      <React.Fragment>
        <tr>
          <td>
            <img className="logoliste" src="https://expressimmoprestige.be/images/logofb.jpg" alt />
           
              <p>{item.title}</p>
        
            <span className="user-subhead">Admin</span>
          </td>
          <td>{item.date_construction}</td>
          <td className="text-center">
            <span className="label label-default">{this.statue()} </span>
          </td>
          <td>
            {item.adresse}
          </td>
          <td style={{ width: "20%" }}>
            <a href="#" className="table-link">
              <span class="fa-stack">
                <i class="fa fa-camera fa-stack-1x" />
                <i class="fa fa-ban fa-stack-2x" 
                onClick={this.isactive} 
                />
              </span>
            </a>
            <a href="#" className="table-link">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <Link to={`/admin/catalogue/editimmo/${item._id}`}> <i className="fa fa-pencil fa-stack-1x fa-inverse" /></Link>
              </span>
            </a>
            <a href="#" className="table-link danger">
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i
                  className="fa fa-trash-o fa-stack-1x fa-inverse"
                  onClick={this.deleteimmobilier}
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
    deleteImmoReducer: _id => {
      dispatch({
        type: "REMOVE_IMMO",
        _id
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(SingleImmo)
