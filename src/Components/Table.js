import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import AppContext from "../context/AppContext";
import { db } from '../service/firebase';
import { MyTable, TableBody, TableHead } from '../Style/Components/Table';

export default function Table() {
  const [tasks, setTasks] = useState([])
  const {user, setTaskInfo} = useContext(AppContext)

  useEffect(() => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleEdit = async (id) => {
    const docRef = doc(db, 'tasks', id)
    const docSnap = await getDoc(docRef)
    setTaskInfo({...docSnap.data(), doc: id})
  }
  return (
    <MyTable>
        <TableHead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
            <th>
              Priority
            </th>
          </tr>
        </TableHead>

        <TableBody>
          {tasks.map((doc, index) => (
            <tr 
            key={index}  
            onClick={() => handleEdit(doc.id)}
            >
              <td>
                {doc.name}
              </td>
              <td>
                {doc.description}
              </td>
              <td>
                {doc.priority}
              </td>
            </tr>
          ))}
        </TableBody>
    </MyTable>
  )
}
