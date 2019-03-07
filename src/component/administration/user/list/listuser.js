import React from "react"
import { Component } from "react"

import _css_ from "../../style/style.module.css"
class Listuser extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`content-wrapper ${_css_.padds}`}>
          <p>Liste des users</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Listuser
