import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from 'react';
import AppContext from "../context/AppContext";
import { db } from '../service/firebase';
import { MyTable, TableBody, TableHead } from '../Style/Components/Table';

export default function Table() {
  const [tasks, setTasks] = useState([])
  const {user} = useContext(AppContext)

  useEffect(() => {
    const collectionRef = collection(db, 'tasks');
    const searchQuery =  query(collectionRef, where('uid', '==', user.uid));
    
    onSnapshot(searchQuery, (querySnapshot) => {
      const array = []
      querySnapshot.forEach((doc) => {
        array.push(doc.data())
      setTasks(array);
      });

    })
  }, [user.uid])

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
            <tr key={index}>
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
