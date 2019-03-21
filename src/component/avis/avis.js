import React from "react"
import { Component } from "react"
import "./avis.css"
import StarRatingComponent from "react-star-rating-component"
import axios from "axios"
import AvisValide from "./avisvalide"
import { NotificationContainer, NotificationManager } from "react-notifications"


class Avis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 1,
      name: "", 
      email: "",
      message: "",
      disabled: true,
      enattente: 1,
      allavis: ""
    }
  }
  onStarClick = (nextValue, prevValue, name) =>
    this.setState({ rating: nextValue })
  handleOnChange = event => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({ [event.target.name]: event.target.value }, () => {
      if (
        re.test(this.state.email) &&
        this.state.name.length > 6 &&
        this.state.message.length > 6
      ) {
        this.setState({ disabled: false })
      } else {
        this.setState({ disabled: true })
      }
    })
  }

  componentDidMount = () => {
    axios.get("/getavis").then(res => this.setState({ allavis: res.data }))
  }

  insert_avis = () => {
                        const {
                          rating,
                          name,
                          email,
                          message,
                          disabled,
                          enattente
                        } = {
                          ...this.state
                        }
                        axios
                          .post("/postavis", {
                            rating,
                            name,
                            email,
                            message,
                            disabled,
                            enattente
                          })
                          .then(response => (
                            NotificationManager.success("Votre avis est soumis", "", 3000),
                            this.setState({ rating:'',
                              name:'',
                              email:'',
                              message:'',
                              disabled:'',
                              enattente:''})
                            ) )
                            .catch(err =>
                              NotificationManager.error(
                                "Une erreur lors d'ajout, essayer une autre fois",
                                ""
                              )
                            )
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
<div className="row">
        {[...this.state.allavis].map((item, index) => (
          <div className="col-lg-6">
 <AvisValide key={index} item={item} />
 </div>
        ))}
      
        </div>
        <NotificationContainer />

      </React.Fragment>
    )
  }
}

export default Avis
