import React, { Component } from 'react';
import Details from './details';
class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Details/>
            </div>           
             );
    }
}
export default Reservation;