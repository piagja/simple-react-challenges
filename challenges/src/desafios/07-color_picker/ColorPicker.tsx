import React from 'react'
import ColorBox from './ColorBox'

import { colors } from './Colors'

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = React.useState('white')

  return (
    <div style={{ backgroundColor }}>
      <h1>Color Picker</h1>

      {colors.map(color => (
        <ColorBox
          key={color.name}
          name={color.name}
          hex={color.color}
          setBackgroundColor={setBackgroundColor}
        />
      ))}
    </div>
  )
}

export default ColorPicker
