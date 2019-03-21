import React from "react"
import { Component } from "react"
import "./avis.css"
class AvisValide extends Component {
  constructor(props) {
    super(props)
    this.state = { star: "" }
  }
  render() {
    const { rating, name, email, message } = { ...this.props.item }
    var x = ""
    for (var i = 0; i < rating; i++) {
      x = x + "⭐"
    }
    return (
      <React.Fragment>
        <div className="ok">
          <div className="review">
            <h4 className="review__title">{x}</h4>
            <div className="review__score">
              <span className="score-stars" />
            </div>
            <div className="review__text">
              "<i>{message}</i>" –{" "}
              <small>
                {name} | {email}{" "}
              </small>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default AvisValide
