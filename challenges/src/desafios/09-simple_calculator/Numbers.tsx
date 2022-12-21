import React, { ReactHTMLElement } from 'react'

import './styles.css'
import Operations from './Operations'

const initialState = {
  num1: 0,
  num2: 0,
  result: 'Sem resultados ainda'
}

const reducer = (state, action) => {
  if (action.type === 'SET_NUM_ONE') return { ...state, num1: action.number }
  if (action.type === 'SET_NUM_TWO') return { ...state, num2: action.number }
  if (action.type === 'ADD')
    return { ...state, result: state.num1 + state.num2 }
  if (action.type === 'SUB')
    return { ...state, result: state.num1 - state.num2 }

  if (action.type === 'CLEAR') return initialState
}

const Calculator = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <section className='calc_numbers'>
      <h1>Number 1</h1>
      <div className='numbers_area'>
        {numbers.map(number => (
          <button
            className='the_number_buttons'
            key={number}
            onClick={() => dispatch({ type: 'SET_NUM_ONE', number })}
          >
            {number}
          </button>
        ))}
      </div>

      <h1>Number 2</h1>
      <div className='numbers_area'>
        {numbers.map(number => (
          <button
            className='the_number_buttons'
            key={number}
            onClick={() => dispatch({ type: 'SET_NUM_TWO', number })}
          >
            {number}
          </button>
        ))}
      </div>

      <div className='numbers_area'>
        <Operations dispatch={dispatch} />
      </div>

      <div className='result_area'>{state.result}</div>
    </section>
  )
}

export default Calculator
