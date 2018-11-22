import React from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, mode, Chromatic, root, onOff} = props
  let notes = mode[1].map(x => root[x])
  let string = permute(Chromatic, startNote)
  string = string.concat(string).concat(string[0])
  let nums = mode[0].map(x => x)
  
  return (
    <div className="stringContainer">
      { 
        onOff === '0' ?
        string.map((note, i) =>
          <div className='frets'>
            {notes.indexOf(note) !== -1 ?
              <div>
                {
                  notes[0] === note ? <div style={{background: '#79ca7c'}}>{note}</div> :
                  notes[1] === note ? <div style={{background: '#81b5d2'}}>{note}</div> :
                  notes[2] === note ? <div style={{background: '#79ca7c'}}>{note}</div> :
                  notes[3] === note ? <div style={{background: '#81b5d2'}}>{note}</div> :
                  notes[4] === note ? <div style={{background: '#79ca7c'}}>{note}</div> :
                  notes[5] === note ? <div style={{background: '#81b5d2'}}>{note}</div> :
                  notes[6] === note ? <div style={{background: '#79ca7c'}}>{note}</div> : 0
                }
              </div>  
              :
              <div>
                
              </div>}

          </div>
        )
        :
        string.map((note, i) => 
        notes.indexOf(note) !== -1 ?
          <div>
            {nums[notes]}
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
