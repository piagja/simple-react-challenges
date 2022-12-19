import React from 'react'
import ColorsPallet from './ColorsPallet'
import Pixels from './Pixels'

import './styles.css'
import { GlobalStorage } from './PixelArt-context'

const PixelArt = () => {
  return (
    <GlobalStorage>
      <h1 style={{ textAlign: 'center' }}>Pixel Art</h1>
      <hr />
      <header className='pallet-header'>
        <ColorsPallet />
      </header>

      <main className='squares-main'>
        <Pixels />
      </main>
    </GlobalStorage>
  )
}

export default PixelArt
