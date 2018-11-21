import React, { Component } from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, Chromatic} = props
  let perm = permute(Chromatic, startNote)
  perm = perm.concat(perm).concat(perm[0])
  
  return (
    <div className="stringContainer">
      {
          perm.map(x => <div>{x}</div>)
      }
    </div>
  )
}

export default String;
