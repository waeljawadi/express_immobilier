import React from "react"
import { Component } from "react"
import "./avis.css"
import StarRatingComponent from "react-star-rating-component"
import axios from "axios"

class Avis extends Component {
  constructor(props) {
    super(props)
    this.state = { rating: 0, name: "", email: "", message: "", disabled: true, enattente:1 }
  }
  onStarClick = (nextValue, prevValue, name) =>
    this.setState({ rating: nextValue })
  handleOnChange = event => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState(
      { [event.target.name]: event.target.value }, () => {
        if (re.test(this.state.email) && (this.state.name.length > 6) && (this.state.message.length > 6)) {
          this.setState({ disabled: false })
        } else {
          this.setState({ disabled: true })
        }
      }
    )
  }


  insert_avis = () => {
    axios
      .post("/postavis", { ...this.state })
      .then(res => console.log('ok')).catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <form className="form">
          <h2 className="center">
            Votre avis nous intéresse, &nbsp;faites-nous partager votre
            expérience.
          </h2>
          <p type="Name:">
            <input
              name="name"
              type="text"
              maxLength="30"
              placeholder="Ècris ton nom içi.."
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </p>
          <p type="Email:">
            <input
              type="email"
              name="email"
              placeholder="Dites-nous comment vous recontacter.."
              maxLength="30"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </p>
          <p type="Message:">
            <input
              name="message"
              type="text"
              placeholder="Que voudriez-vous nous dire.."
              value={this.state.message}
              onChange={this.handleOnChange}
            />
          </p>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
          <input
            type="button"
            class="addavis"
            disabled={this.state.disabled}
            value="Ajouter votre avis"
            onClick={this.insert_avis}
          />
        </form>
      </React.Fragment>
    )
  }
}

export default Avis
