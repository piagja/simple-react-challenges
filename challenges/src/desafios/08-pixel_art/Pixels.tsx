import React, { useContext } from 'react'

import './styles.css'
import { GlobalContext } from './PixelArt-context'

const Pixel = () => {
  const { color } = useContext(GlobalContext) as any
  const [pixelColor, setPixelColor] = React.useState('grey')

  return (
    <button
      onClick={() => setPixelColor(color)}
      style={{ backgroundColor: pixelColor }}
      className='squares-to-draw'
    ></button>
  )
}

const Pixels = () => {
  const pixels = [] as any

  const generatePixelsGrid = () => {
    for (let i = 0; i < 150; i++) {
      pixels.push(<Pixel key={i} />)
    }
  }

  React.useMemo(generatePixelsGrid, [])

  return (
    <div>
      <div className='main__squares-to-draw'>{pixels}</div>
    </div>
  )
}

export default Pixels
