import React, { useEffect, useState } from 'react'

const WindowEvent = () => {
  const [toggleEvent, setToggleEvent] = useState(false)
  const [toggleMessage, setToggleMessage] = useState('')

  useEffect(() => {
    const doubleClick = () => alert('Double clicked!')

    window.addEventListener('dblclick', doubleClick)

    return () => window.removeEventListener('dblclick', doubleClick)
  })

  const handleToggle = () => {}

  return (
    <div>
      <h1>Window Event</h1>
      <button onClick={handleToggle}>Toggle Window Event</button>
      <h3>{toggleMessage}</h3>
    </div>
  )
}

export default WindowEvent
