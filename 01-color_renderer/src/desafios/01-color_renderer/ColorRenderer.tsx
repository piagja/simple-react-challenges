import React from 'react'
import { hexColorsCode } from './Colors'
import ReactDOM from 'react-dom/client'

const ColorRenderer = () => {
  const [pickedColor, setPickedColor] = React.useState('')
  const [pickedColorName, setPickedColorName] = React.useState('')

  const handleColor = ({ target }) => {
    const value = target.style.backgroundColor
    const name = target.innerText

    setPickedColor(value)
    setPickedColorName(name)
  }

  return (
    <section style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ backgroundColor: pickedColor }}>{pickedColorName}</div>

      {hexColorsCode.map(({ color, code: { hex } }, index) => (
        <div
          onClick={handleColor}
          key={index}
          style={{
            backgroundColor: hex,
            padding: '1rem',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            height: '100px',
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem'
          }}
        >
          {color}
        </div>
      ))}
    </section>
  )
}

export default ColorRenderer
