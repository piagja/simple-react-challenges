import React from 'react'

const ColorBox = ({ name, hex, setBackgroundColor }) => {
  return (
    <button
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}

export default ColorBox
