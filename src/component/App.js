import React, { Component } from "react"
import Footer from "./footer/footer"
<<<<<<< HEAD
import Header from "./header/header"
import Home from "./home/home"

=======
import Router from "./router/router"
import {BrowserRouter} from 'react-router-dom'
>>>>>>> 6ae584204c492df88c0ebb0079838fdb3065c656
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">       
      <BrowserRouter>      
           <Router />   
        </BrowserRouter>
      </div>
    )
  }
}
export default App
