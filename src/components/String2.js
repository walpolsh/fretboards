import React from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, mode, Chromatic, root} = props
  let [nums, notes, names, chords] = mode
  notes = notes.map(x => root[x])
  let perm = permute(Chromatic, startNote)
  perm = perm.concat(perm).concat(perm[0])


  return (
    <div>
      <h1>{names}</h1>
      <div className="stringContainer">
        { 
          perm.map(note => {
            console.log(note, notes)
            return (
              notes.indexOf(note) !== -1 ?
              
              <div>
                  {note}
                </div>  
                :
                <div>
                  -
                </div>
          )  
        })
      }
      </div>
    </div>
  )
}

export default String;
