import React, { Component } from 'react';
import image1 from '../../../assets/pictures/slide/image4.jpg';
import image2 from '../../../assets/pictures/slide/image2.jpg';
import image3 from '../../../assets/pictures/slide/image1.jpg';
import image4 from '../../../assets/pictures/slide/image3.jpg';
import image5 from '../../../assets/pictures/slide/kontakt.jpg';
class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image5} className="d-block w-100" alt="First slide" />
      
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img src={image4} className="d-block w-100" alt="Fourth slide"/>
    </div>
    <div className="carousel-item">
      <img src={image1} className="d-block w-100" alt="Fourth slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
































        </div> );
    }
}
 
export default Slide ;