import React, { Component } from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote} = props
  const Chromatic = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]

  //if note === [i]
    //background: yellow; 

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
