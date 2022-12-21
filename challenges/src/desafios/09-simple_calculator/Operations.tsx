import React from 'react'

const Operations = ({ dispatch }) => {
  return (
    <div className='operations_area'>
      <div>
        <h1>Actions</h1>
        <button
          onClick={() => dispatch({ type: 'ADD' })}
          className='the_number_buttons'
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'SUB' })}
          className='the_number_buttons'
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'CLEAR' })}
          className='the_number_buttons'
        >
          C
        </button>
      </div>
    </div>
  )
}

export default Operations
