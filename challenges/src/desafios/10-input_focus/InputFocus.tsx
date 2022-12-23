import React from 'react'

const InputFocus = () => {
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    console.log({ inputRef })
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h1>When loaded, focus on input below</h1>

      <div>
        <input type='text' ref={inputRef} />
      </div>
    </div>
  )
}

export default InputFocus
