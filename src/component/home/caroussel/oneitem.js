import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"

import _css_ from "./caroussel.module.css"


class OneItem extends Component {
  render() {
    const { item } = { ...this.props }
    const { title, vendu, adresse, imageUrls } = { ...item }
    let dispono
    vendu == 1 ? (dispono = "Vendu") : (dispono = "Disponible")

    return (
      <React.Fragment>
        <div className={`item center ${_css_.item}`}>
          <label className={`${_css_.disponible}`}>{dispono}</label>

          <Link to={`/listecatalogue/reservation/${this.props.item._id}`}>
            <img src={imageUrls[0]} className={`${_css_.other}`} />
          </Link>
          <p className={` ${_css_.usd} ${_css_.special}`}>
            <i class={`fa fa-language`} aria-hidden="true" />
            <span>{title}</span>
          </p>
          <p className={` ${_css_.usd}`}>
            <i className={`fa fa-usd`} aria-hidden="true" />
            <span>{this.props.item.prix}</span>
          </p>
          <p className={` ${_css_.marker}`}>
            <i className={`fa fa-map-marker`} aria-hidden="true" />
            <span>{adresse} </span>
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default OneItem
