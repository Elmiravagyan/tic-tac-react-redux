import React, { Component } from 'react';
import XIcon from './components/xIcon';
import OIcon from './components/oIcon';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{marginTop: "20px"}}>
          Initial version of tic-tac-toe
          <OIcon/>
      </div>
    );
  }
}

export default App;
