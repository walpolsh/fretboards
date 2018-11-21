import React, { Component } from 'react';

const String = (props) => {
  let {Chromatic, changeNote} = props
  Chromatic = Chromatic.concat(Chromatic).concat(Chromatic[0])
  return (
    <div className="stringContainer">
      <select  onChange={changeNote}>
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
      {
          Chromatic.map(x => <div >{x}</div>)
      }
    </div>
  )
}

export default String;
