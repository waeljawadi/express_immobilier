import React, { Component } from 'react';
import './listimmo.css'

class SingleImmo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment> 
           
<tr>
                        <td>
                          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                          <a href="#" className="user-link">Mila Kunis</a>
                          <span className="user-subhead">Admin</span>
                        </td>
                        <td>
                          2013/08/08
                        </td>
                        <td className="text-center">
                          <span className="label label-default">Inactive</span>
                        </td>
                        <td>
                          <a href="#">mila@kunis.com</a>
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
                              <i className="fa fa-square fa-stack-2x" />
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
                            </span>
                          </a>
                        </td>
                      </tr>
                     






        </React.Fragment> );
    }
}
 
export default SingleImmo;