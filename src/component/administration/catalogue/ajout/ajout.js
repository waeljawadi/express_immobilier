import React from "react"
import { Component } from "react"

import _css_ from "../../style/style.module.css"
import _tabs_ from './style/style.module.css'


class Ajout extends Component {
  render() {
    return (
      <React.Fragment>
<div className={`content-wrapper ${_css_.padds}`}>
<div>    
        <ul className="nav nav-tabs" role="tablist">
          <li className={`nav-item ${_tabs_.navitemedit}`}>
            <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">profile</a>
          </li>
           <li className={`nav-item ${_tabs_.navitemedit}`}>
            <a className="nav-link" href="#buzz" role="tab" data-toggle="tab">buzz
            
            </a>
          </li>
           <li className={`nav-item ${_tabs_.navitemedit}`}>
            <a className="nav-link" href="#references" role="tab" data-toggle="tab">references</a>
          </li>
        </ul>   
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="profile">...</div>
          <div role="tabpanel" className="tab-pane fade" id="buzz">
          </div>
          <div role="tabpanel" className="tab-pane fade" id="references">ccc</div>
        </div>
      </div>
</div>

      </React.Fragment>
    )
  }
}

export default Ajout
