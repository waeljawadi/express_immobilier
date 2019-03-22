import React from "react"
import { Component } from "react"
import "../login/login.css"
class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login">
          <div className="login-triangle" />
          <h2 className="login-header">Log in</h2>
          <form className="login-container">
            <div className="center-on-page">
            </div>
            <p>
              <input type="email" placeholder="Email" />
            </p>
            <p>
              <input type="password" placeholder="Password" />
            </p>
            <p>
              <input type="submit" value="Log in" />
            </p>
          </form>
        </div>


        
      </React.Fragment>
    )
  }
}
export default Login
