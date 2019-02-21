import React from "react"
import { Component } from "react"

import _css_ from "./header.module.css"

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`${_css_.high}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <i className={`fa fa-phone ${_css_.phone}`} />
                <span>(+216) 21 123 456</span>
              </div>
              <div className="col-lg-3 col-md-6">
                <i className={`fa fa-home ${_css_.company}`} />
                <span>Express Immobilier</span>
              </div>
              <div className="col-lg-3 col-md-6">
              <i class={`fa fa-envelope ${_css_.envelope}`}></i>contact@expimmo.com
              </div>
              <div className="col-lg-3 col-md-6">
              <a href="" className={`${_css_.link}`}>
              <i class={`fa fa-user ${_css_.users}`}></i>Login or Register
              </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header
