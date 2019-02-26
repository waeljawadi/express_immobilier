import React, { Component } from 'react';
import Home from '../home/home'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ListeCatalogue from '../catalogue/liste-catalogue';
import Footer from '../footer/footer'
import Header from '../header/header'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<Route  path='/' component={Header}/> 
<Route exact path='/' component={Home}/> 
<Route exact path='/listecatalogue' component={ListeCatalogue}/> 
<Route  path='/' component={Footer}/> 

        </div> );
    }
}
 
export default Router;