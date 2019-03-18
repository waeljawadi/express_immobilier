import React, { Component } from "react"
import Home from "../home/home"
import { BrowserRouter, Route, Link } from "react-router-dom"
import ListeCatalogue from "../catalogue/liste-catalogue"
import ListeActualite from "../actualité/list-actualite"
import Footer from "../footer/footer"
import Header from "../header/header"
import Login from "../login/login"
import Register from "../register/register"
import Avis from "../avis/avis"
import Reservation from "../reservation/reservation"
import Admin from "../administration/admin"
import Nhnf from "../administration/nhnf"

import Listimmo from '../administration/catalogue/list/listimmo'
import Ajout from '../administration/catalogue/ajout/ajout'
import Config from '../administration/catalogue/config/config'
import EditImmo from '../administration/catalogue/ajout/editimmo'

import Listuser from '../administration/user/list/listuser'
import Attenteuser from '../administration/user/attente/attenteuser'
import SingleImmo from '../administration/catalogue/list/single_immo'

import AjoutActualite from "../administration/actualité/ajout/ajout-actu"
import ListeActu from "../administration/actualité/list-actu/listactu"
import EditActualite from "../administration/actualité/ajout/edit-actu"



class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let check_if_admin = false
    window.location.href.indexOf("/admin") != -1
      ? (check_if_admin = true)
      : (check_if_admin = false)
    let header
    let footer
    !check_if_admin
      ? (header = <Route path="/" component={Header} />) &&
        (footer = <Route path="/" component={Footer} />)
      : (header = <Route path="/" component={Nhnf} />) &&
        (footer = <Route path="/" component={Nhnf} />)

    return (
      <React.Fragment>
        {header}

        <Route exact path="/" component={Home} />
        <Route exact path="/listecatalogue" component={ListeCatalogue} />
        <Route exact path="/listeactualite" component={ListeActualite} />
        <Route exact path="/avis" component={Avis} />
        <Route exact path="/reservation" component={Reservation} />
        <Route  path="/admin" component={Admin} />

        <Route exact path="/admin/catalogue/listimmo" component={Listimmo} />
        <Route exact path="/admin/catalogue/ajout" component={Ajout} />
        <Route exact path="/admin/catalogue/config" component={Config} />
        <Route exact path='/admin/catalogue/editimmo/:id' component={EditImmo}/>

        <Route exact path="/admin/actualite/listactu" component={ListeActu} />
        <Route exact path="/admin/actualité/ajout" component={AjoutActualite} />
        <Route exact path="/admin/actualité/editactu/:id" component={EditActualite} />

        <Route exact path="/admin/user/listuser" component={Listuser} />
        <Route exact path="/admin/user/attenteuser" component={Attenteuser} />


        <Route exact path="/contact" component={SingleImmo} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {footer}
      </React.Fragment>
    )
  }
}
export default Router
