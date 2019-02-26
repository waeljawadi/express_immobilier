import React from "react"
import { Component } from "react"
import '../register/register.css'
class Register extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="login">
          <div className="login-triangle" />
          <h2 className="login-header">Sign up</h2>
          <form className="login-container">
          
            <p>
              <input type="email" placeholder="Email" />
            </p>
            <p>
              <input type="password" placeholder="Password" />
            </p>
            <p>
              <input type="password" placeholder="Confirm Password" />
            </p>
            <p>
              <input type="password" placeholder="First name" />
            </p>
            <p>
              <input type="password" placeholder="Last name" />
            </p>
            <p> 
              <input type="submit" value="Regsiter" />
            </p>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
export default Register
