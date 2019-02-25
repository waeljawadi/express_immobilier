import React, { Component } from 'react';
import Slide from './home/slide-home';
import Footer from './footer/footer';
import Carreaux from './carreaux/carreaux'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Slide/>
        <Carreaux/>
       <Footer/>
      </div>
    );
  }
}

export default App;
