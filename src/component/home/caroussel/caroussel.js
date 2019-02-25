import React from "react"
import { Component } from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

import _css_ from "./caroussel.module.css"

import image1 from "../../../assets/pictures/home_caroussel/image1.jpg"
import image2 from "../../../assets/pictures/home_caroussel/image2.jpg"
import image3 from "../../../assets/pictures/home_caroussel/image3.jpg"
import image4 from "../../../assets/pictures/home_caroussel/image4.jpg"

class Caroussel extends Component {
  render() {
    return (
      <React.Fragment>
        <OwlCarousel
          className="owl-theme container"
          loop
          margin={10}
          items={3}
          nav
        >
          <div className={`item center ${_css_.item}`}>
          <label className={`${_css_.disponible}`}>Disponible</label>
            <img src={image1}  className={`${_css_.other}`}/>
            <p className={` ${_css_.usd} ${_css_.special}`}>
              <i class={`fa fa-language`} aria-hidden="true" />
              <span>Brown design</span>
            </p>
            <p className={` ${_css_.usd}`}>
              <i className={`fa fa-usd`} aria-hidden="true" />
              <span>21.000</span>
            </p>
            <p className={` ${_css_.marker}`}>
              <i className={`fa fa-map-marker`} aria-hidden="true" />
              <span>21 Miles Street Clayfield			</span>
            </p>
          </div>
        </OwlCarousel>
      </React.Fragment>
    )
  }
}
export default Caroussel
