import React, { Component } from 'react';
import axios from 'axios'

import './listimmo.css'

class SingleImmo extends Component {
   

  //   deleteimmobilier=()=>
  //   {  const {item} = this.props
  //   axios.delete(`/deleteimmo/${item._id}`)   
  // .then(()=>this.props.deleteimmoReducer(item._id)) 
  // .catch((err)=>alert(err)) 
  //   }


suprrimmo=()=>
{  const {item} = this.props
axios.delete(`/deleteimmo/${item._id}`)   
.then('') 
.catch((err)=>alert(err)) 
}



    statue=()=>{
      if ((this.props.item.vendu)==1)
    
       return 'vendu'
      
        else 
          return 'disponible'
      }
    
    


    render() { 
      const {item}=this.props
      

        return ( <React.Fragment> 
<tr>
                        <td>
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                          <a href="#" className="user-link">{item.title}</a>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>
                          {item.date_construction}
                        </td>
                        <td className="text-center">
                          <span className="label label-default">{this.statue()} </span>
                        </td>
                        <td>
                          <a href="#">{item.adresse}</a>
                        </td>
                        <td style={{width: '20%'}}>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <a href="#" className="table-link danger">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"/>
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                          <button  onClick={this.suprrimmo}> delete</button>
                        </td>
                        
                      </tr>
                     






        </React.Fragment> );
    }
}
 


export default SingleImmo











