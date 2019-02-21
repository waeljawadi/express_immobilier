import React from "react"
import { Component } from "react"

import _css_ from "./style/navmenu.module.css"

class Navmenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-light ${_css_.menu_size}`}
        >
          <div className="container">
            <div className="row">
              {/* <a className="navbar-brand" href="#">
                Navbar
              </a> */} 
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
                      Avis Client
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Vendeurs
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
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
export default Navmenu
