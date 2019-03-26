// import React from "react"
// import { Component } from "react"
// import "../login/login.css"
// class Login extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="login">
//           <div className="login-triangle" />
//           <h2 className="login-header">Log in</h2>
//           <form className="login-container">
//             <div className="center-on-page">
//             </div>
//             <p>
//               <input type="email" placeholder="Email" />
//             </p>
//             <p>
//               <input type="password" placeholder="Password" />
//             </p>
//             <p>
//               <input type="submit" value="Log in" />
//             </p>
//           </form>
//         </div>


        
//       </React.Fragment>
//     )
//   }
// }
// export default Login



import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/admin');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div className="login">
           <div className="login-triangle" />

      <h2 className="login-header">Log in</h2>
      <form className="login-container" onSubmit={this.onSubmit}>
      <p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        </p>
        <p>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        </p>
        <p>
        <input type="submit" value="Submit"/>
        </p>
      </form>
      </div>
    );
  }
}

export default Login