import React, { Component } from 'react';
import Slide from './slide-home';
import Search from './search'
import Paralax from './paralax';
import Caroussel from './caroussel/caroussel'
import Carreaux from './carreaux/carreaux'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
            <Slide/>
          
        <Carreaux />
            <Search/>
            <Caroussel/>
            <Paralax/>


            
        </div>);
    }
}
 
export default Home;




