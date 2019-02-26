import React, { Component } from "react"
import Slide from "./slide/slide-home"
import Search from "./search/search"
import Paralax from "./paralax/paralax"
import Caroussel from "./caroussel/caroussel"

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
      </div>
    )
  }
}

export default Home
