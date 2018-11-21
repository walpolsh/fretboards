import React, { Component } from 'react';
import './App.css';
import {Chromatic} from './constants/scales'
import {permute} from './constants/helpers'
import String from './components/String'

class App extends Component {
  constructor() {
    super()
    this.state = {
      note: Chromatic
    }

  }

  render() {
    let note = this.state.note
    return (
      <div className="App">
          <String startNote={4} Chromatic={note}/>
          <String startNote={11}Chromatic={note}/>
          <String startNote={7}Chromatic={note}/>
          <String startNote={2}Chromatic={note}/>
          <String startNote={9}Chromatic={note}/>
          <String startNote={4}Chromatic={note}/>
      </div>
    );
  }
}

export default App;
