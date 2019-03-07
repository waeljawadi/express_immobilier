import React from "react"
import { Component } from "react"

import _css_ from "../../style/style.module.css"
class Attenteuser extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`content-wrapper ${_css_.padds}`}>
          <p>User en attente d'acceptation</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Attenteuser
