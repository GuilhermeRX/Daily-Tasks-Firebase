import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({children}) {
  const [user, setUser] = useState({});
  const [taskInfo, setTaskInfo] = useState();
  const [select, setSelect] = useState('ongoing')
  const [done, setDone] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [onGoing, setOnGoing] = useState(0);
  const [review, setReview] = useState(0);

  const handleUser = (info) => setUser(info);

  const contextValue = {
    user,
    handleUser,
    taskInfo,
    setTaskInfo,
    select,
    setSelect,
    done,
    setDone,
    inProgress,
    setInProgress,
    onGoing,
    setOnGoing,
    review,
    setReview,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}
