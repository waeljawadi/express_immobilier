import React from "react"
import { Component } from "react"


import Infotop from "./infotop"
import Navmenu from "./navmenu"

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Infotop />
        <Navmenu />
      </React.Fragment>
    )
  }
}

export default Header
