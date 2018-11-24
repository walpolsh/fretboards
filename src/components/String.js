import React from 'react';
import {permute} from '../constants/helpers'

const String = (props) => {
  let {startNote, mode, Chromatic, root, 
    handleHighlight, handleHighlight2, handleHighlight3, handleHighlight4, 
    handleHighlight5, handleHighlight6, handleHighlight7, handleHighlight8,
    first, second, third, fourth, fifth, sixth, seventh, eighth} = props
  let notes = mode[1].map(x => root[x])
  let string = permute(Chromatic, startNote)
  string = string.concat(string).concat(string[0])  
  return (
    <div className="stringContainer">
      { 
        string.map((note, i) =>
          {
            let j = i
          return (
          <div className='frets' key={j++}>
            {notes.indexOf(note) !== -1 ?
                  notes[0] === note ? 
                    <div onClick={handleHighlight} className={first}>{note}</div>
                    :
                  notes[1] === note ? 
                    <div onClick={handleHighlight2} className={second}>{note}</div>
                    :
                  notes[2] === note ? 
                    <div onClick={handleHighlight3} className={third}>{note}</div>
                    :
                  notes[3] === note ? 
                    <div onClick={handleHighlight4} className={fourth}>{note}</div>
                    :
                  notes[4] === note ? 
                    <div onClick={handleHighlight5} className={fifth}>{note}</div>
                    :
                  notes[5] === note ? 
                    <div onClick={handleHighlight6} className={sixth}>{note}</div>
                    :
                  notes[6] === note ? 
                    <div onClick={handleHighlight7} className={seventh}>{note}</div>
                    : 
                  notes[7] === note ? 
                    <div onClick={handleHighlight8} className={eighth}>{note}</div>
                  :
                  0

              :
              <div style={{background: ''}}>
                
              </div>
            }
          </div>
          )
          }
        )
      }
    </div>
  )
}

export default String;
