import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [user, setUser] = useState({})
  const [task, setTask] = useState([])
  
  const handleUser = (info) => setUser(info);
  const handleTask = (info) => setTask(info);

  const contextValue = {
    user,
    handleUser,
    task,
    handleTask,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
