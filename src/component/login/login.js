import React, { Component } from 'react';
//import Cookies from 'js-cookie';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      userid: cookies.get('userid')    };
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
console.log(document.cookie.substr(14, 24))
    
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