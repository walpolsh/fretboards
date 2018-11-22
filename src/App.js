import React, { Component } from 'react';
import './App.css';
import {Chromatic} from './constants/scales'
import String from './components/String'
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
//String must recognize Scale values
// each scale has a 1-12 value
// Major is 0 2 4 5 7 9 11
// Chromatic is an array from 0 - 11
// A string must have a starting note based on the 
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
        <select  onChange={this.changeKey}>
              <option id='keySig' value='0'>C</option>
              <option value='1'>Db</option>
              <option value='2'>D</option>
              <option value='3'>Eb</option>
              <option value='4'>E</option>
              <option value='5'>F</option>
              <option value='6'>Gb</option>
              <option value='7'>G</option>
              <option value='8'>Ab</option>
              <option value='9'>A</option>
              <option value='10'>Bb</option>
              <option value='11'>B</option>
            </select>
        </div>
        <div>
          <String startNote={4} Chromatic={Chromatic}/>
          <String startNote={11}Chromatic={Chromatic}/>
          <String startNote={7}Chromatic={Chromatic}/>
          <String startNote={2}Chromatic={Chromatic}/>
          <String startNote={9}Chromatic={Chromatic}/>
          <String startNote={4}Chromatic={Chromatic}/>
        </div>
      </div>
    );
  }
}

export default App;
