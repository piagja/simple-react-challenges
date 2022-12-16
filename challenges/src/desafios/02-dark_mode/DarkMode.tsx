import React from 'react'
import './styles.css'

const DarkMode = () => {
  const [theme, setTheme] = React.useState('light')

  const handleTheme = ({ target }) => {
    setTheme(target.innerText.toLowerCase())
  }

  const style = {
    margin: '0.6rem',
    width: '100px',
    height: '40px',
    borderRadius: '10px',
    border: 'none'
  }

  return (
    <section className={`page ${theme && theme}`}>
      <div>
        <button
          className='light-mode-button'
          style={style}
          onClick={handleTheme}
        >
          Light
        </button>
        <button
          className='dark-mode-button'
          style={style}
          onClick={handleTheme}
        >
          Dark
        </button>
      </div>
    </section>
  )
}

export default DarkMode
