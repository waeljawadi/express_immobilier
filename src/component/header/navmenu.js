import React from "react"
import { Component } from "react"
import head_logo from "../../assets/pictures/head-logo.png"

import _css_ from "./style/navmenu.module.css"

class Navmenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-light ${
            _css_.menu_size
          }`}
        >
          <div className={`container ${_css_.noflex}`}>
            <div className="row">
              <div className="col-lg-10 col">
                <button
                  className={`navbar-toggler ${_css_.navbartoggler}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <section className={`${_css_.color}`}>
                    <nav className={`${_css_.cl_effect}`}>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Catalogue
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Vendu
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Avis client
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Actualités
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </div>
              </div>
              <div className="col-lg-2 col center">
                <img src={head_logo} width="150" />
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
export default Navmenu
