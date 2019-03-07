import React from "react"
import { Component } from "react"

import { Link } from "react-router-dom"

import _css_ from "./style/infotop.module.css"

class Infotop extends Component {
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
                <i className={`fa fa-envelope ${_css_.envelope}`} />
                contact@expimmo.com
              </div>
              <div className="col-lg-3 col-md-6">
                <span className={`${_css_.link}`}>
                  <i className={`fa fa-user ${_css_.users}`} />
                  <Link className="link"  to='/login' id="login">Login</Link> or <Link className="link" 
                   to='/register'  id="registeruser">Register</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Infotop
