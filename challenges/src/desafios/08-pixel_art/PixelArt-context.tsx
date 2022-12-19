import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [color, setColor] = React.useState('grey')

  return (
    <GlobalContext.Provider value={{ color: color, setColor: setColor }}>
      {children}
    </GlobalContext.Provider>
  )
}
