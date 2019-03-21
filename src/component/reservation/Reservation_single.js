import React, { Component } from 'react';
// import './details.css';


class Reservation_single extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
<React.Fragment>

<div className="row">
<div className="col-lg-8 col-md-12 col-sm-12 part1">

<div className="ligne1res">

    <img className="imgreservation" src="http://goodhomes.themerex.net/wp-content/uploads/2017/04/offer_02-1170x658.jpg"/>

</div>
 
<div className="ligne2res">
    <p className="titrvilla">Villa in Newyork </p>
    <p className="prxvilla"> 120000 TND</p>
    <p className="adresvilla">cité les jardins 3100 Kairouan</p>
</div>
 
<div className="ligne3">
<p className='parag1res'>Fusce quis ex tincidunt, posuere lacus maximus ipsum suspendisse scelerisque elit ut nunc aliquam a pretium lacus tempor phasellus gravida nibh et molestie semper. Nam dignissim, tellus non eleifend rutrum turpis nulla pharetra dolor eu suscipit sapien neque non turpis. Fusce dignissim sodales arcu, quis vehicula sem dignissim non donec molestie posuere dignissim. Cras vel arcu libero.</p>
<p className='parag1res'>Vivamus ex enim, euismod porttitor arcu sagittis, bibendum interdum enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque sollicitudin erat et lectus consectetur, non mattis metus vehicula. Maecenas tristique commodo augue sit amet rhoncus.</p>
<p className='parag1res'>Nunc eu laoreet ex, quis elementum felis. Etiam maximus risus id magna consequat, non varius tortor bibendum. Phasellus elit neque, laoreet nec facilisis id, sagittis vel nisi. Duis vel consequat neque. Donec eget bibendum elit. Morbi tristique rutrum ex. Vestibulum a nulla ante. Morbi sodales, lacus eget tempus pulvinar, mi tortor pellentesque arcu, at pellentesque diam sem dignissim</p>
</div>


<div className="ligne4">
<p className="detaisres"> Details:</p>
<hr></hr>
<div className="row line4res">
 <div className="col-lg-6 col-md-12 col-sm-12">
 <p className="pdetails">Prix: <label className="prixdet">120000</label>TND</p>
 <p className="pdetails">Surface: <label className="surfacedet">120</label> <b>m</b><sup>2</sup></p>
 <p className="pdetails">Adresse: <label className="adressedet">cité les jardins 3100 Kairouan</label> </p> 
 <p className="pdetails">Construit: 2018</p>
 </div>
 <div className="col-lg-6 col-md-12 col-sm-12">
 <p className="pdetails">Description de la salle de bain: Stall Shower</p>
 <p className="pdetails">Garage: 1</p>
 <p className="pdetails">Salle de bain: 2</p>
 </div>
</div>
</div>

<div className="ligne4">
<p className="detaisres"> Features:</p>
<hr></hr>
<div className="row line4res">
 <div className="col-lg-6 col-md-12 col-sm-12">
 <p className="pdetails"> <i className="fa fa-check"></i> Cable TV</p>
 <p className="pdetails"> <i className="fa fa-check"></i> Kitchen</p>
 <p className="pdetails"> <i className="fa fa-check"></i>Swimming Pool  </p> 
 <p className="pdetails"> <i className="fa fa-check"></i>Air condition</p>
 </div>
 <div className="col-lg-6 col-md-12 col-sm-12">
 <p className="pdetails"> <i className="fa fa-check"></i>Barbeque</p>
 <p className="pdetails"> <i className="fa fa-check"></i>Dryer</p>
 <p className="pdetails"> <i className="fa fa-check"></i>Laundry</p>
 <p className="pdetails"> <i className="fa fa-check"></i>WIFI</p>
 </div>
</div>
</div>


<div className="ligne5">
<p className="mapres"> Google Map:</p>
<hr></hr>

<div className="map" id="map">

</div>

</div>


</div>

<div className="col-lg-4 col-md-12 col-sm-12 part2">
<img src="http://www.investimmoclub.com/wp-content/uploads/2015/07/Infographic1-InvestissementsAlternatifs-1.png" className="imgres"/>

</div>


</div>

</React.Fragment>        
         );
    }
}
export default Reservation_single;





