import React, { Component } from "react"
import { MDBBtn, MDBJumbotron, MDBContainer } from "mdbreact"
import "./detailactualite.css"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import axios from "axios"
const BASE_URL = "http://localhost:3000/"
class DetailActualite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actubase: ""
    }
  }
  componentDidMount() {
    axios
      .get(`/getdetailactualite/${this.props.match.params.id}`)
      .then(res => this.setState({ actubase: res.data }))
  }
  render() {
    // let single_actu =  Object.values(this.state.actubase)
    return (
      <MDBContainer>
        <MDBJumbotron>
          <div className="reseau">
            <i class="fa fa-twitter-square" />
            <i class="fa fa-facebook-square" />
            <i class="fa fa-google-plus-square" />
          </div>
          <h1 className="h1-responsive">Lire l'actualité!</h1>
          <p className="courte">
            {/* {single_actu.map((item,index) => item.dcourte)}
             */}
            {[...this.state.actubase].map(item => item.dcourte)}
          </p>
          <div className="detimg">
            {/* {single_actu.map((item,index) => <img src={BASE_URL+item.imageUrls[0]} className="imgactu"/>)} */}
            {[...this.state.actubase].map(item => (
              <img src={BASE_URL + item.imageUrls[0]} className="imgactu" />
            ))}
          </div>
          <p className="lead">
            {/* {single_actu.map((item,index) => item.dcomplet)} */}
            {[...this.state.actubase].map(item => item.dcomplet)}
          </p>
          <hr className="my-2" />
          <p>
            Par Administrateur Publié le
            {/* {single_actu.map((item,index) => item.date_postulation)} */}
            {[...this.state.actubase].map(item => item.date_postulation)}
          </p>
          <Link to="/listeactualite" className="nav-link">
            <MDBBtn color="success" size="lg">
              Retour
            </MDBBtn>
          </Link>
        </MDBJumbotron>
      </MDBContainer>
    )
  }
}
export default withRouter(DetailActualite)
