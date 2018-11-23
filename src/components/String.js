import React from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, mode, Chromatic, root, onOff, stringName} = props
  let notes = mode[1].map(x => root[x])
  let string = permute(Chromatic, startNote)
  string = string.concat(string).concat(string[0])
  let nums = mode[0].map(x => x)
  

  return (
    <div className="stringContainer">
      { 
        string.map((note, i) =>
          
          <div className='frets'>
            {notes.indexOf(note) !== -1 ?
                  notes[0] === note ? 
                    <div className='first'>{note}</div>
                    :
                  notes[1] === note ? 
                    <div className='second'>{note}</div>
                    :
                  notes[2] === note ? 
                    <div className='third'>{note}</div>
                    :
                  notes[3] === note ? 
                    <div className='second'>{note}</div>
                    :
                  notes[4] === note ? 
                    <div className='third'>{note}</div>
                    :
                  notes[5] === note ? 
                    <div className='second'>{note}</div>
                    :
                  notes[6] === note ? 
                    <div className='third'>{note}</div>
                    : 
                  notes[7] === note ? 
                  <div className='second'>{note}</div>
                  :
                  0

              :
              <div style={{background: ''}}>
                
              </div>}

          </div>
        )
      }
    </div>
  )
}

export default String;
