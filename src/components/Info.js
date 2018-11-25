import React from 'react';

const Info = (props) => {
  let {mode, root} = props;
  let name = mode[2]
  let nums = mode[0] ? mode[0].map((x, i) => <div className='info' key={i++}>{x}</div>) : ''
  let notes = mode[3][0][0] ? mode[1].map((x, i) => 
    <div className='info' key={i}>{root[x]} {mode[3][0][0][i]}</div>) : 
    mode[1].map((x, i) => <div className='info' key={i}>{root[x]}</div>)
  return (
    <div className='infoHead'>
      <h1>{name}</h1>
      <div className='formulaContainer'><div className='info'>Formula:</div> {nums}</div>
      <div className='chordContainer'><div className='info'>Chords:</div> {notes}</div>
      <br/>
    </div>
  )
}

export default Info;
