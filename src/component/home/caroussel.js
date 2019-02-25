import React from "react"
import { Component } from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

class Caroussel extends Component {
  render() {
   
    return (
      <React.Fragment>
        <OwlCarousel className="owl-theme" loop margin={10} items={4} nav>
          <div className="item">
            <h4>1</h4>
          </div>
          <div className="item">
            <h4>2</h4>
          </div>
        

        </OwlCarousel>
      </React.Fragment>
    )
  }
}
export default Caroussel
