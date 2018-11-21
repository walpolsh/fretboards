import React, { Component } from 'react';

const String = (props) => {
  let {Chromatic} = props
  Chromatic = Chromatic.concat(Chromatic).concat(Chromatic[0])
  return (
    <div className="stringContainer">
      {
        Chromatic.map(x => <div >{x}</div>)
      }
    </div>
  )
}

export default String;
