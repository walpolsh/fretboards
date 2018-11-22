import React, { Component } from 'react';
import './App.css';
import String from './components/String'
import Header from './components/Header'
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor } from './constants/scales';
import {permute} from './constants/helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      root: Chromatic,
      scale: Major,
    }

    this.changeScale = this.changeScale.bind(this)
    this.changeKey = this.changeKey.bind(this)
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
  
  render() {

    // let scale = this.state.scale[0][1].map(x => this.state.root[x])
    let scale = this.state.scale
    let notes = this.state.scale.map(mode => 
      mode[1].map(x =>
        this.state.root[x]
      )
    )
    let names = this.state.scale.map(mode => {
      mode[2].map(x => x)}
    )
    return (
      <div className="App">
        <div>
          <Header 
            changeKey={this.changeKey}
            changeScale={this.changeScale}
          />
        </div>
          {
            notes.map(mode => 
              <div>
                  <h1>{names[mode]}</h1>
                  <String startNote={4}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                  <String startNote={11}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                  <String startNote={7}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                  <String startNote={2}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                  <String startNote={9}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                  <String startNote={4}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}/>
                </div>
            )
          }
          
      </div>
    );
  }
}

export default App;
