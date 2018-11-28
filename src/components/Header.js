import React from 'react'
import banner from './header.png'
const Header = (props) => {
  const { changeKey, changeScale } = props
  return (
    <div className='topnav'>
      <div className='headerBox'>
        <img className='banner' alt='banner' src={banner} style={{}}></img>
      </div>
      <div className='keyBox'>
        <button id='keySig' value='0' onClick={changeKey}>C</button>
        <button value='1' onClick={changeKey}>Db</button>
        <button value='2' onClick={changeKey}>D</button>
        <button value='3' onClick={changeKey}>Eb</button>
        <button value='4' onClick={changeKey}>E</button>
        <button value='5' onClick={changeKey}>F</button>
        <button value='6' onClick={changeKey}>Gb</button>
        <button value='7' onClick={changeKey}>G</button>
        <button value='8' onClick={changeKey}>Ab</button>
        <button value='9' onClick={changeKey}>A</button>
        <button value='10' onClick={changeKey}>Bb</button>
        <button value='11' onClick={changeKey}>B</button>
      </div>
      <div className='scaleBox'>
        <button value='0' onClick={changeScale}>Major</button>
        <button value='1' onClick={changeScale}>Melodic Min.</button>
        <button value='2' onClick={changeScale}>Harmonic Min.</button>
        <button value='3' onClick={changeScale}>Harmonic Maj.</button>
        <button value='4' onClick={changeScale}>Hungarian Maj.</button>
        <button value='5' onClick={changeScale}>Hungarian Min.</button>
        <button value='7' onClick={changeScale}>Neapolitan Maj.</button>
        <button value='6' onClick={changeScale}>Neapolitan Min.</button>
        <button value='9' onClick={changeScale}>Pentatonic</button>
        <button value='10' onClick={changeScale}>Kumoi</button>
        <button value='11' onClick={changeScale}>Hirojoshi</button>
        <button value='8' onClick={changeScale}>Symmetrical</button>
        <button value='12' onClick={changeScale}>Bebop Dominant</button>
      </div>
    </div>
  )
}

export default Header