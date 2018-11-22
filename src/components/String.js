import React, { Component } from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, mode, Chromatic, root} = props

  let perm = permute(Chromatic, startNote)
  perm = perm.concat(perm).concat(perm[0])
  return (
    <div className="stringContainer">
      { 
        perm.map(note => 
        mode.indexOf(note) !== -1 ?
          <div>
            {note}
          </div>  
          :
          <div>
            -
          </div>
        )
      }
    </div>
  )
}

export default String;
