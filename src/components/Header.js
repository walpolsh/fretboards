import React from 'react'
import banner from './header.png'
const Header = (props) => {
  const { changeKey, changeScale, handleSwitch, onOff } = props
  return (
    <div className='topnav'>
      <div className='headerBox'>
        <img alt='banner' src={banner} style={{width: '300px', height: '50px'}}></img>
      </div>
      {/* <div className='menuBox'>
        <div>
          <input type='checkbox' name='1'/>
          <label for='1'>1</label>
          <input type='checkbox' name='2'/>
          <label for='2'>2</label>
          <input type='checkbox' name='3'/>
          <label for='3'>3</label>
          <input type='checkbox' name='4'/>
          <label for='4'>4</label>
          <input type='checkbox' name='5'/>
          <label for='5'>5</label>
          <input type='checkbox' name='6'/>
          <label for='6'>6</label>
          <input type='checkbox' name='7'/>
          <label for='7'>7</label>
        </div>
      </div> */}
      <div className='menuBox'>
        {/* {
          onOff === '1' ?
          <button id='notes/nums' onClick={handleSwitch} value='0'>Nums</button>
          :
          <button id='notes/nums' onClick={handleSwitch} value='1'>Notes</button>
        } */}
        <select onChange={changeKey}>
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
        <select id='scale' onChange={changeScale}> 
          <option value='0'>Major</option>
          <option value='1'>Melodic Minor</option>
          <option value='2'>Harmonic Minor</option>
          <option value='3'>Harmonic Major</option>
          <option value='4'>Hungarian Major</option>
          <option value='5'>Hungarian Minor</option>
          <option value='7'>Neapolitan Major</option>
          <option value='6'>Neapolitan Minor</option>
          <option value='9'>Minor Pentatonic</option>
          <option value='10'>Kumoi Pentatonic</option>
          <option value='11'>Hirojoshi Pentatonic</option>
          <option value='8'>Symmetrical</option>
        </select>

      </div>
    </div>
  )
}

export default Header