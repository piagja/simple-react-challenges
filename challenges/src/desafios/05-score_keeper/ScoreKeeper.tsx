import React from 'react'

import './styles.css'

const ScoreKeeper = () => {
  const [score, setScore] = React.useState(0)
  const [message, setMessage] = React.useState('')

  const timeoutRef = React.useRef()

  const findErrors = () => {
    const errors = []

    if (score < 0) {
      setScore(0)
      errors.push('O score não pode ser menor que 0!')
    }

    return errors
  }

  const handleClick = ({ target }) => {
    const innerText = target.innerText

    if (innerText === '+') setScore(score + 1)
    if (innerText === '-') setScore(score - 1)

    const errors = findErrors()

    setMessage(errors.length ? errors.join(', ') : '')

    localStorage.setItem('score', score)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  React.useEffect(() => {
    const getItem = localStorage.getItem('score')
    if (getItem !== null) setScore(getItem)
  }, [])

  React.useEffect(() => {
    if (score !== null) localStorage.setItem('score', score)
  })

  return (
    <div>
      <h1 className='score-keeper__title'>Score Keeper =D</h1>

      <div className='score-keeper'>
        <button className='button-sum' onClick={handleClick}>
          +
        </button>
        <p className='score'>{score}</p>
        <button className='button-minus' onClick={handleClick}>
          -
        </button>
      </div>
      <p className='score-error'>{message}</p>
    </div>
  )
}

export default ScoreKeeper
