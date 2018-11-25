import React, { Component } from 'react';
import './App.css';
import banner from './header.png'
import String from './components/String'
import Info from './components/Info'
import Header from './components/Header'
import { Chromatic, Major, MelodicMinor, HarmonicMinor, HarmonicMajor, HungarianMajor, HungarianMinor, NeapolitanMinor, NeapolitanMajor, Symmetrical, Pentatonic, Kumoi, Hirojoshi } from './constants/scales';
import {permute} from './constants/helpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      root: Chromatic,
      scale: Major,
      onOff: '0',
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
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleHighlight = this.handleHighlight.bind(this)
    this.handleHighlight2 = this.handleHighlight2.bind(this)
    this.handleHighlight3 = this.handleHighlight3.bind(this)
    this.handleHighlight4 = this.handleHighlight4.bind(this)
    this.handleHighlight5 = this.handleHighlight5.bind(this)
    this.handleHighlight6 = this.handleHighlight6.bind(this)
    this.handleHighlight7 = this.handleHighlight7.bind(this)
    this.handleHighlight8 = this.handleHighlight8.bind(this)

  }

  componentWillMount() {
    this.setState({
      list: ["first", "second", "third"],
      listChecked: [{ first: false }, { second: false }, { third: false }]
    });
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
    let onOff = this.state.onOff
    let root = this.state.root
 
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
        <div style={{paddingTop: '120px'}} className='wrapper'>
        {/* <div className='headerBox'>
          <img alt='banner' src={banner} style={{width: '300px', height: '50px'}}></img>
        </div> */}
        {
          scale.map((mode, i) => 
            {
              let j = i;
              return (
              <div key={j}className='guitarContainer'>
                <Info 
                  mode={mode}
                  root={root}
                />
                {/* <div>
                  <h3>{names[i]} {mode[3][0] ? `(${mode[3][0].map(x => x[i])})` : ''}</h3>
                  <h4>{mode[1].map(x => root[x]).join(' - ')}</h4>
                  <h4 style={{paddingBottom: '10px'}}>{formulas[i].join(' - ')}</h4>
                </div> */}

                <div className='fretboardContainer'>
                  <String 
                    stringName='E'
                    startNote={4}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  
                  />
                  <String
                    stringName='B'
                    startNote={11}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  

                  />
                  <String
                    stringName='G' 
                    startNote={7}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  


                  />
                  <String
                    stringName='D' 
                    startNote={2}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  


                  />
                  <String
                    stringName='A' 
                    startNote={9}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  


                  />
                  <String
                    stringName='D' 
                    startNote={2}
                    Chromatic={Chromatic}
                    root={this.state.root}
                    mode={mode}
                    onOff={onOff}
                    handleHighlight={this.handleHighlight}
                    handleHighlight2={this.handleHighlight2}
                    handleHighlight3={this.handleHighlight3}
                    handleHighlight4={this.handleHighlight4}
                    handleHighlight5={this.handleHighlight5}
                    handleHighlight6={this.handleHighlight6}
                    handleHighlight7={this.handleHighlight7}
                    handleHighlight8={this.handleHighlight8}
                    first={this.state.first ? 'first' : 'hide'}  
                    second={this.state.second ? 'second' : 'hide'}  
                    third={this.state.third ? 'third' : 'hide'}  
                    fourth={this.state.fourth ? 'fourth' : 'hide'}  
                    fifth={this.state.fifth ? 'fifth' : 'hide'}  
                    sixth={this.state.sixth ? 'sixth' : 'hide'}  
                    seventh={this.state.seventh ? 'seventh' : 'hide'}  
                    eighth={this.state.eighth ? 'eighth' : 'hide'}  


                  />
                  </div>
                  <div className='numberContainer'>
                    {['0','1','','3','','5','','7','','9','','','12','','','15','','17','','19','','21','','','24'].map((x, i) => 
                      <div key={i++}>{x}</div>)}
                  </div>
                    <div className='numberContainer'>
                    {['••','•','','•','','•','','•','','•','','','••','','','•','','•','','•','','•','','','••'].map((x, i) => 
                      <div key={i++}>{x}</div>)}
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
