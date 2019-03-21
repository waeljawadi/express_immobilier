import React from "react"
import { Component } from "react"
import head_logo from "../../assets/pictures/head-logo.png"

import _css_ from "./style/navmenu.module.css"
import { Link } from 'react-router-dom'

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
                          <Link  to='/' className="nav-link">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link  to='/listecatalogue' className="nav-link">
                            Catalogue
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link  to='/detailactualite' className="nav-link">
                            Vendu
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link  to='/avis' className="nav-link">
                            Avis Client
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link  to='/listeactualite' className="nav-link">
                            Actualité
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link  to='/contact' className="nav-link">
                            contact
                          </Link>
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
