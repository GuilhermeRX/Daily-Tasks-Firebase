import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [user, setUser] = useState({});
  const [taskInfo, setTaskInfo] = useState();

  const handleUser = (info) => setUser(info);
  const contextValue = {
    user,
    handleUser,
    taskInfo,
    setTaskInfo,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
