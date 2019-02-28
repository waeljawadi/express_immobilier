import React, { Component } from "react"
import Footer from "./footer/footer"
import Router from "./router/router"
import {BrowserRouter} from 'react-router-dom'
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
