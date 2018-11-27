import React from 'react';

const Info = (props) => {
  let {mode, root, handleHighlight, handleHighlight2, handleHighlight3, handleHighlight4, handleHighlight5, handleHighlight6, handleHighlight7, handleHighlight8, first, second, third, fourth, fifth, sixth, seventh, eighth} = props;
  let name = mode[2]
  let nums = mode[0] ? mode[0].map((x, i) => <div className='info' key={i++}>{x}</div>) : ''
  let color = (i) => 
    i === 0 ? first :
    i === 1 ? second :
    i === 2 ? third :
    i === 3 ? fourth :
    i === 4 ? fifth :
    i === 5 ? sixth :
    i === 6 ? seventh : eighth
  let handler = (i) =>    
    i === 0 ? handleHighlight :
    i === 1 ? handleHighlight2 :
    i === 2 ? handleHighlight3 :
    i === 3 ? handleHighlight4 :
    i === 4 ? handleHighlight5 :
    i === 5 ? handleHighlight6 :
    i === 6 ? handleHighlight7 : handleHighlight8

  let notes = mode[3][0][0] ? 
    mode[1].map((x, i) => <div onClick={handler(i)} className={`info ${color(i)}`} key={i}>{root[x]} {mode[3][0][0][i]}</div>) : 
    mode[1].map((x, i) => <div onClick={handler(i)} className={`info ${color(i)}`} key={i}>{root[x]}</div>)
  let columns = 
    notes.length === 8 ? 'repeat(9, 1fr)' : 
    notes.length === 6 ? 'repeat(7, 1fr)' : 
    notes.length === 5 ? 'repeat(6, 1fr)' : 
    'repeat(8, 1fr)'

  return (
    <div className='infoHead'>
      <h1>{root[0]} {name}</h1>
      <div className='formulaContainer' style={{gridTemplateColumns: `${columns}`}}><div className='info'>Formula:</div> {nums}</div>
      <div className='chordContainer' style={{gridTemplateColumns: `${columns}`}}>
        <div className='info'>Chords:</div> 
      {notes}</div>
      <br/>
    </div>
  )
}

export default Info;

