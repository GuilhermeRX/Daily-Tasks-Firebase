import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillPlayCircle, AiOutlineFileSearch } from "react-icons/ai";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from 'react-icons/fc';
import { MdEditNote } from 'react-icons/md';
import AppContext from "../context/AppContext";
import DoneTask from "../service/DoneTask";
import { db } from '../service/firebase';
import ReviewTask from "../service/ReviewTask";
import { PlayTask } from "../service/StartTask";
import TaskTrash from "../service/TaskTrash";
import { Done, InfoDiv, StartTask, TaskCard, TaskContainer } from "../Style/Components/Card";

export default function Card() {
  const [tasks, setTasks] = useState([])
  const {user, setTaskInfo, select, setSelect} = useContext(AppContext)

  useEffect(() => {
    if (user.uid) {
    const collectionRef = collection(db, 'tasks');
    const searchQuery =  query(
      collectionRef,
      where('uid', '==', user.uid),
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
  }, [select, user])

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
        return undefined;
    }
  }

  const renderCardStatusIcon = (task) => {
    switch (task.status) {
      case 'ongoing': 
        return <AiFillPlayCircle onClick={() => PlayTask(task, setSelect)}/>;
      case 'in progress': 
        return <AiOutlineFileSearch onClick={() => ReviewTask(task, setSelect)}/>;
      case 'review':
        return <AiFillCheckCircle onClick={() => DoneTask(task, setSelect)}/>;
      default: return null;
    }
  }

  const doneTime = (task) => {
    const render = (
      <Done>
        <p>{`Done in: ${task.duration}`}</p>
      </Done>
    )
    return render
  }
  
  return (
    <TaskContainer>
      {tasks.filter((item) => item.status === select).map((task, index) => (
        <TaskCard
        key={index}
        >
          <h2>{task.name}</h2>
          <p>{task.description}</p>
          <InfoDiv>
            {selectPriority(task)}
            <div>
              <span>
                <p>{new Date(task.dateStart).toLocaleDateString()}</p>
                <p>
                  {`${new Date(task.dateStart).getHours()}:${new Date(task.dateStart).getMinutes()} `}
                </p>
              </span>
              {task.duration !== null && doneTime(task)}
            </div>

          </InfoDiv>
          <StartTask >
            {renderCardStatusIcon(task)}
            <AiFillCloseCircle onClick={() => TaskTrash(task)}/>
            <MdEditNote onClick={() => handleEdit(task.id)}/>
          </StartTask>
        </TaskCard>
      ))}
    </TaskContainer>
  )
}
