import React, { Component } from 'react';
import Slide from './home/slide-home';
import Footer from './footer/footer'




class App extends Component {
  render() {
    return (
      <div className="App">
       <Slide/>
       <Footer/>
      </div>
    );
  }
}

export default App;
