import React, { Component } from "react"
import Footer from "./footer/footer"
import Header from "./header/header"
import Home from "./home/home"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
