import React from "react"
import { Component } from "react"
import '../register/register.css'
import { NotificationContainer, NotificationManager } from "react-notifications"
import axios from 'axios'


class Register extends Component {
  constructor(props) {
    super(props)
    {

      this.state = { 
        useremail:'',
        userpassword:'',
        confirmuserpassword:'',
        username:'',
        lastname:'',
        disabled: true,
       }

    }
  }




  users_register = () => {
    axios
      .post("/postusers", { ...this.state })
      .then(
        response => (
          NotificationManager.success("Inscription avec success", "", 3000),
          window.setTimeout(() => {
            NotificationManager.info("Bienvenue")
          }, 1500),
          this.setState({
           
        useremail:'',
        userpassword:'',
        confirmuserpassword:'',
        username:'',
        lastname:'',
        disabled: true,
          })
        )
      )
      .catch(err =>
        NotificationManager.error(
          "Une erreur lors de l'envoi, essayer une autre fois",
          ""
        )
      )
  }



  handleChange = event => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({ [event.target.name]: event.target.value }, () => {
      if (
        re.test(this.state.useremail) &&
        this.state.username.length > 4 &&
        (this.state.lastname.length) >4 &&
       this.state.userpassword === this.state.confirmuserpassword  &&
        this.state.userpassword.length >=8
      ) {
        this.setState({ disabled: false })
      } else {
        this.setState({ disabled: true })
      }
    })
  }



  render() {
    return (
        <React.Fragment>
        <div className="login">
          <div className="login-triangle" />
          <h2 className="login-header">Sign up</h2>
          <form className="login-container">
          
            <p>
              <input type="email"
              placeholder="Email"
              name="useremail"
              value={this.state.useremail}
              onChange={this.handleChange} />
            </p>
            <p>
              <input type="password" placeholder="Password"
              name="userpassword"
              value={this.state.userpassword}
              onChange={this.handleChange} />
            </p>
            <p>
              <input type="password" 
              placeholder="Confirm Password"
              name="confirmuserpassword"
              value={this.state.confirmuserpassword}
              onChange={this.handleChange} />
            </p>
            <p>
              <input type="text" 
              placeholder="First name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
            </p>
            <p>
              <input type="text"
               placeholder="Last name"
               name="lastname"
               value={this.state.lastname}
               onChange={this.handleChange} />
            </p>
            <p> 
              <input type="button" 
              value="Regsiter"
              disabled={this.state.disabled}
              onClick={this.users_register} />
            </p>
          </form>
        </div>
        <NotificationContainer />  
      </React.Fragment>
    )
  }
}
export default Register
