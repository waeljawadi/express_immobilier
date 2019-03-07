import React, { Component } from "react"

import SideBar from "./admin-side"
import Header from "./admin-header"

import Defaultadmin from "./defaultadmin"
import _css_ from "./style/style.module.css"

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let check_if_admin_main
    window.location.href.indexOf("/admin/") == -1
      ? (check_if_admin_main = (
          <div className={`col-lg-12 ${_css_.bgall}`}>
            <Defaultadmin />
          </div>
        ))
      : (check_if_admin_main = "")

    return (
      <React.Fragment>
        <Header />
          <SideBar />
        {check_if_admin_main}
      </React.Fragment>
    )
  }
}
export default Admin
