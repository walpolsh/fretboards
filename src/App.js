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
    this.changeNote = this.changeNote.bind(this)
  }
  changeNote(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      note: permute(keys, e),
    })
  }
  render() {
    let note = this.state.note
    return (
      <div className="App">
          <String changeNote={this.changeNote} Chromatic={note}/>
          <String changeNote={this.changeNote} Chromatic={note}/>
      </div>
    );
  }
}

export default App;
