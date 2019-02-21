import React from "react"
import { Component } from "react"

import _css_ from "./style/navmenu.module.css"

class Navmenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          class={`navbar navbar-expand-lg navbar-light bg-light ${
            _css_.menu_size
          }`}
        >
          <div className="container">
            <div className="row">
              {/* <a class="navbar-brand" href="#">
                Navbar
              </a> */}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Catalogue
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Vendu
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Avis Client
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Vendeurs
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Actualités
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
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
