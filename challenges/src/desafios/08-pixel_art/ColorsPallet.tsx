import React, { useContext } from 'react'
import { GlobalContext } from './PixelArt-context'
import './styles.css'
import { drawColorBox } from './colors'

const ColorsPallet = () => {
  const { setColor } = useContext(GlobalContext) as any

  return (
    <>
      <div className='pallet-main_square'>
        {drawColorBox.map(({ name, hex }) => (
          <button
            className='pallet-color_square'
            style={{ backgroundColor: hex }}
            key={hex}
            onClick={() => setColor(hex)}
          >
            {name}
          </button>
        ))}
      </div>
    </>
  )
}

export default ColorsPallet
