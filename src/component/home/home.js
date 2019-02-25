import React, { Component } from 'react';
import Slide from './slide-home';
import Search from './search'
import Paralax from './paralax';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
            <Slide/>
            <Search/>
            <Paralax/>

<<<<<<< HEAD
            
        </div>);
    }
}
 
export default Home;
=======
import React from 'react'
import {Component} from 'react'
import Caroussel from './caroussel'

class Home extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <Caroussel/>
            </React.Fragment>
        )
    }
}

export default Home

>>>>>>> master
