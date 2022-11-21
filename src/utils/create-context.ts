import React from 'react'

function createContext<T>() {
  const Context = React.createContext<T | undefined>(undefined)

  function useContext() {
    const context = React.useContext(Context)
    if (!context) {
      throw new Error('useContext must be within a Provider with a value')
    }
    return context
  }

  return [Context.Provider, useContext, Context] as const
}

export default createContext
