import React from 'react'
import DogPictures from './desafios/04-dog_pictures/DogPictures'

const App = () => {
  const style = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <main style={style}>
      <DogPictures />
    </main>
  )
}

export default App
