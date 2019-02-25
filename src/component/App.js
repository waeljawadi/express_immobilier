import React, { Component } from 'react';
import Home from './home/home'


import React, { Component } from "react"


import "./App.css"
import Header from "./header/header"

import Footer from "./footer/footer"

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
