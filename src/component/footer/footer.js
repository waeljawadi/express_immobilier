import React, { Component } from "react"
import "./footer.css"
import logosami from "./logosami.jpg"

class Footer extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="footprincipal">
          <div className="row">
            <div className="col-sm-4 sociallogo">
              <img className="samilogo" src={logosami} />
              <div className="info">
                <h5>Information</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Etiam
                  consectetur aliquet aliquet. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus.{" "}
                </p>
              </div>
              <div className="social-icons">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter fa-2x" />
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook fa-2x" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin fa-2x" />
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram fa-2x" />
                </a>
              </div>
            </div>
            <div className="col-sm-4 getstared">
              <h5>Get started</h5>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-eye" aria-hidden="true" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-eye" aria-hidden="true" /> Sign up
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-eye" aria-hidden="true" /> Downloads
                  </a>
                </li>
              </ul>
              <div>
                <h5>Support</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className=" fa fa-check-square" /> FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=" fa fa-check-square" /> Help desk
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className=" fa fa-check-square" /> Forums
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 contacts">
              <h5>About us</h5>
              <ul>
                <li>
                  <i className="fa fa-map-marker" /> immeuble x route y{" "}
                </li>
                <li>
                  <i className="fa fa-phone" /> 98796859
                </li>
                <li>
                  <i className="fa fa-fax" /> 98796859
                </li>
                <li>
                  <i className="fa fa-envelope" /> immo@planet.tn
                </li>
              </ul>
            </div>
          </div>
          <div className="row second-bar">
            <p>
              Copyright © 2019 <a href="#">immogomycode</a>. All right reserved.
              Designed by
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
