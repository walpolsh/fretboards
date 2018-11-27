import React, { Component } from 'react';
import './App.css';
import String from './components/String'
import Info from './components/Info'
import Header from './components/Header'
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor, Symmetrical, Pentatonic, Kumoi, Hirojoshi, BebopDominant } from './constants/scales';
import {permute} from './constants/helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      root: permute(Chromatic, 4),
      scale: Major,
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth: true,
      sixth: true,
      seventh: true,
      eighth: true,
    }

    this.changeScale = this.changeScale.bind(this)
    this.changeKey = this.changeKey.bind(this)
    this.handleHighlight = this.handleHighlight.bind(this)
    this.handleHighlight2 = this.handleHighlight2.bind(this)
    this.handleHighlight3 = this.handleHighlight3.bind(this)
    this.handleHighlight4 = this.handleHighlight4.bind(this)
    this.handleHighlight5 = this.handleHighlight5.bind(this)
    this.handleHighlight6 = this.handleHighlight6.bind(this)
    this.handleHighlight7 = this.handleHighlight7.bind(this)
    this.handleHighlight8 = this.handleHighlight8.bind(this)
  }

  changeKey(event) {
    let keys = Chromatic;
    const e = event.target.value
    this.setState({
      root: permute(keys, e),
    })
  }

  changeScale(event) {
    let scales = [Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor, Symmetrical, Pentatonic, Kumoi, Hirojoshi, BebopDominant];
    const e = event.target.value
    this.setState({
      scale: scales[e],
    })
  }


  handleHighlight() {
    this.setState({
      first: !this.state.first
    })
  }

  handleHighlight2() {
    this.setState({
      second: !this.state.second
    })
  }

  handleHighlight3() {
    this.setState({
      third: !this.state.third
    })
  }


  handleHighlight4() {
    this.setState({
      fourth: !this.state.fourth
    })
  }


  handleHighlight5() {
    this.setState({
      fifth: !this.state.fifth
    })
  }


  handleHighlight6() {
    this.setState({
      sixth: !this.state.sixth
    })
  }

  handleHighlight7() {
    this.setState({
      seventh: !this.state.seventh
    })
  }

  handleHighlight8() {
    this.setState({
      eighth: !this.state.eighth
    })
  }
  
  render() {
    let scale = this.state.scale
    let root = this.state.root
    const commonProps = {
      handleHighlight: this.handleHighlight,
      handleHighlight2: this.handleHighlight2,
      handleHighlight3: this.handleHighlight3,
      handleHighlight4: this.handleHighlight4,
      handleHighlight5: this.handleHighlight5,
      handleHighlight6: this.handleHighlight6,
      handleHighlight7: this.handleHighlight7,
      handleHighlight8: this.handleHighlight8,
      first: this.state.first ? 'first' : 'hide'  ,
      second: this.state.second ? 'second' : 'hide'  ,
      third: this.state.third ? 'third' : 'hide'  ,
      fourth: this.state.fourth ? 'fourth' : 'hide'  ,
      fifth: this.state.fifth ? 'fifth' : 'hide'  ,
      sixth: this.state.sixth ? 'sixth' : 'hide'  ,
      seventh: this.state.seventh ? 'seventh' : 'hide'  ,
      eighth: this.state.eighth ? 'eighth' : 'hide'  
    }

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
        <div style={{paddingTop: '150px'}} className='wrapper'>

        {
          scale.map((mode, i) => 
            {
              let j = i;
              return (
              <div key={j}className='guitarContainer'>
                <Info 
                  mode={mode}
                  root={root}
                  {...commonProps}  
                />
                <div className='fretboardContainer'>
                  <String 
                    stringName='E'
                    startNote={4}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  <String
                    stringName='B'
                    startNote={11}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  <String
                    stringName='G' 
                    startNote={7}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  <String
                    stringName='D' 
                    startNote={2}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  <String
                    stringName='A' 
                    startNote={9}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  <String
                    stringName='E' 
                    startNote={4}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    {...commonProps}  
                  />
                  </div>
                  <div className='numberContainer'>
                    {
                      ['','1','','3','','5','','7','','9','','','12','','','15','','17','','19','','21','','','24']
                      .map((x, i) => <div key={i++}>{x}</div>
                      )
                    }
                  </div>
                </div>
              )
            }
            )
          }
        </div>
        <footer>
            <div>
              <hr/> 
              <a href="https://github.com/walpolsh">© Paul J. Walsh</a>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
