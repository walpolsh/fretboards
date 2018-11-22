import React from 'react'

const Header = (props) => {
  const { changeKey } = props

  return (
    <div>
    <select  onChange={changeKey}>
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
  </div>
  )
}

export default Header