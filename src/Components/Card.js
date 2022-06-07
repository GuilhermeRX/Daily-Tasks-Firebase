import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillPlayCircle } from "react-icons/ai";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from 'react-icons/fc';
import { MdEditNote } from 'react-icons/md';
import AppContext from "../context/AppContext";
import DoneTask from "../service/DoneTask";
import { db } from '../service/firebase';
import { PlayTask } from "../service/StartTask";
import TaskTrash from "../service/TaskTrash";
import { InfoDiv, StartTask, TaskCard, TaskContainer } from "../Style/Components/Card";

export default function Card() {
  const [tasks, setTasks] = useState([])
  const {user, setTaskInfo} = useContext(AppContext)

  
  useEffect(() => {
    if (user.uid) {
      console.log('USER AUTH - TABLE REQUISITIONS OK !')
    const collectionRef = collection(db, 'tasks');
    const searchQuery =  query(
      collectionRef,
      where('uid', '==', user.uid),
      where('done', '==', false),
      orderBy('priority', 'asc'),
      orderBy('name', 'asc'));
    
    onSnapshot(searchQuery, (querySnapshot) => {
      const array = []
  
      if(querySnapshot.docs.length === 0) {
        return setTasks([])
      }
      
      querySnapshot.forEach((doc) => {
        const addDocId = {
          ...doc.data(),
          id: doc.id,
        }
        array.push(addDocId)
        setTasks(array);
      });
      
    })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleEdit = async (id) => {
    const docRef = doc(db, 'tasks', id)
    const docSnap = await getDoc(docRef)
    setTaskInfo({...docSnap.data(), doc: id})
  }

  const selectPriority = (task) => {
    switch (task.priority) {
      case 1: return <FcHighPriority />;
      case 2: return <FcMediumPriority />;
      case 3: return <FcLowPriority />;
      default:
        console.log('Sorry, choice one priority');
    }
  }
  
  return (
    <TaskContainer>
      {tasks.map((task, index) => (
        <TaskCard
        key={index}
        
        >
          <h2>{task.name}</h2>
          <p>{task.description}</p>
          <InfoDiv>
            {selectPriority(task)}
            <div>
              <p>{new Date(task.dateStart).toLocaleDateString()}</p>
              <p>
                {`${new Date(task.dateStart).getHours()}:${new Date(task.dateStart).getMinutes()} `}
              </p>
            </div>
          <StartTask >
            {task.inProgress 
            ? <AiFillCheckCircle onClick={() => DoneTask(task.id)}/>
            : <AiFillPlayCircle onClick={() => PlayTask(task.id)}/>
            }
            <AiFillCloseCircle onClick={() => TaskTrash(task.id)}/>
            <MdEditNote onClick={() => handleEdit(task.id)}/>
            
          </StartTask>
          </InfoDiv>
        </TaskCard>
      ))}
    </TaskContainer>
  )
}
