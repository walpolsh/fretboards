import React, { Component } from 'react';
import './App.css';
import String from './components/String'
import Header from './components/Header'
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor, Symmetrical, Pentatonic, Kumoi, Hirojoshi } from './constants/scales';
import {permute} from './constants/helpers'

const classQuery = 'first' ? '#ff9800':
'second' ? '#81b5d2':
'third' ? '#79ca7c':
'fourth' ? '#81b5d2':
'fifth' ? '#79ca7c':
'sixth' ? '#81b5d2':
'seventh' ? '#79ca7c':
'eighth' ? '#81b5d2' : 0

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
    this.handleHighlight = this.handleHighlight.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      root: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor, Symmetrical, Pentatonic, Kumoi, Hirojoshi];
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

  handleHighlight(e) {

  }

  
  render() {
    let scale = this.state.scale
    let onOff = this.state.onOff
    let root = this.state.root
    let names = scale.map(mode => {
      return mode[2]}
    )
    let formulas = scale.map(mode => {
      return mode[0]}
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
        <div >

        </div>
        <div style={{paddingTop: '20vh'}} className='wrapper'>
        {
          scale.map((mode, i) => 
            <div className='guitarContainer'>
              <div>
                <h3>{names[i]} {mode[3][0] ? `(${mode[3][0].map(x => x[i])})` : ''}</h3>
                <h4>{formulas[i].join(' - ')}</h4>
                <h4 style={{paddingBottom: '10px'}}>{mode[1].map(x => root[x]).join(' - ')}</h4>
              </div>
             
              <div className='fretboardSides'/>
              <div className='fretboardContainer'>
                <String 
                  stringName='E'
                  startNote={4}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                <String
                  stringName='B'
                  startNote={11}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                <String
                  stringName='G' 
                  startNote={7}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                <String
                  stringName='D' 
                  startNote={2}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                <String
                  stringName='A' 
                  startNote={9}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                <String
                  stringName='E' 
                  startNote={4}
                  Chromatic={Chromatic}
                  root={this.state.root}
                  mode={mode}
                  onOff={onOff}
                />
                </div>
                <div className='fretboardSides'/>                                <div className='numberContainer'>
                  {['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'].map((x, i) => 
                    <div key={i++}>{x}</div>)}
                  {/* {['*', '','','*','','*','','*','','*','','','**','','','*','','*','','*','','*','','','*'].map((x, i) =>   
                  <div key={i++}>{x}</div>)} */}
                </div>
              </div>
            )
          }
          
          
        </div>
      </div>
    );
  }
}

export default App;
