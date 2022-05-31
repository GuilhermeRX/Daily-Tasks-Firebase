import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppProvider({children}) {
  const [user, setUser] = useState({})
  
  const handleUser = (info) => {
    setUser(info)
  }

  const contextValue = {
    user,
    handleUser,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
