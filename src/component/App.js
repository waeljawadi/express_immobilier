import React, { Component } from 'react';
import Slide from './home/slide-home';
import Search from './home/search';





class App extends Component {
  render() {
    return (
      <div className="App">
       <Slide/>
       <Search/>
      </div>
    );
  }
}

export default App;
