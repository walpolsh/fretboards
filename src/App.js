import React, { Component } from 'react';
import './App.css';
import NoteString from './components/String'
import Header from './components/Header'
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor } from './constants/scales';
import {permute} from './constants/helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      root: Chromatic,
      scale: Major,
      onOff: '0',
    }

    this.changeScale = this.changeScale.bind(this)
    this.changeKey = this.changeKey.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      root: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }

  handleSwitch(event) {
    const e = event.target.value;
    this.setState({
      onOff: e,
    })
  }

  
  render() {
    let scale = this.state.scale
    let onOff = this.state.onOff
    let names = scale.map(mode => {
      return mode[2]}
    )
 
    return (
      <div className="App">
        <div>
          <Header 
            changeKey={this.changeKey}
            changeScale={this.changeScale}
            handleSwitch={this.handleSwitch}
            onOff={this.state.onOff}
          />
        </div>          
        {
            scale.map((mode, i) => 
              <div style={{paddingTop: '150px'}}>
                <h1>{names[i]}</h1>
                <div className='fretboardContainer'>
                  <NoteString 
                    startNote={4}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />
                  <NoteString 
                    startNote={11}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />
                  <NoteString 
                    startNote={7}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />
                  <NoteString 
                    startNote={2}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />
                  <NoteString 
                    startNote={9}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />
                  <NoteString 
                    startNote={4}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                  />

                </div>
              </div>
            )
          }
          
      </div>
    );
  }
}

export default App;
