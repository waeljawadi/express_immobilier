import React, { Component } from "react"
import Slide from "./slide/slide-home"
import Search from "./search/search"
import Paralax from "./paralax/paralax"
import Caroussel from "./caroussel/caroussel"
import AvisClient from "./avis-client/avis-client";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Slide />
        <Search />
        <Caroussel />
        <Paralax />
        <AvisClient/>
      </div>
    )
  }
}

export default Home
