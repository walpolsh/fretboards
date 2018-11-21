import React, { Component } from 'react';
import './App.css';
import {Chromatic} from './constants/scales'
import String from './components/String'

class App extends Component {
  render() {
    return (
      <div className="App">
          <String Chromatic={Chromatic}/>
      </div>
    );
  }
}

export default App;
