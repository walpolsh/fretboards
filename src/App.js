import React, { Component } from 'react';
import './App.css';
import String from './components/String'
import Header from './components/Header'
import {Chromatic} from './constants/scales'
import {Major} from './constants/scales'
import {permute} from './constants/helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      note: Chromatic,
      scale: Major,
    }

    this.changeKey = this.changeKey.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    console.log(
      permute(keys, e))
    this.setState({
      note: permute(keys, e),
    })
  }

  render() {
    let scale = Major[0][1].map(x => this.state.note[x])
    console.log(scale)
    return (
      <div className="App">
        <div>
          <Header changeKey={this.changeKey}/>
        </div>
        <div>
          <String startNote={4} Chromatic={Chromatic}/>
        </div>
      </div>
    );
  }
}

export default App;
