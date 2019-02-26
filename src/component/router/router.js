import React, { Component } from "react"
import Home from "../home/home"
import { BrowserRouter, Route, Link } from "react-router-dom"
import ListeCatalogue from "../catalogue/liste-catalogue"
import Footer from "../footer/footer"
import Header from "../header/header"
import Login from "../login/login"
import Register from '../register/register'
class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/listecatalogue" component={ListeCatalogue} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/" component={Footer} />
      </React.Fragment>
    )
  }
}
export default Router
