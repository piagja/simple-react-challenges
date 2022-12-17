import React from 'react'
import ColorRenderer from './desafios/01-color_renderer/ColorRenderer'
import DarkMode from './desafios/02-dark_mode/DarkMode'
import Form from './desafios/03-form_validator/Form'

const App = () => {
  const style = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <main style={style}>
      {/* <ColorRenderer /> */}
      {/* <DarkMode /> */}
      <Form />
    </main>
  )
}

export default App
