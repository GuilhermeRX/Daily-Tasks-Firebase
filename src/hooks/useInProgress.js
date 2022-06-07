import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { db } from "../service/firebase";


export default function useInProgress() {
  const {user} = useContext(AppContext)
  const [inProgress, setInProgress] = useState(0)

  if (user.uid) {
    const collectionRef = collection(db, 'tasks');

    const searchQuery =  query(
      collectionRef,
      where('uid', '==', user.uid),
      where('inProgress', '==', true),
    );
  
    onSnapshot(searchQuery, (querySnapshot) => {
      const docs = [];
      if(querySnapshot.docs.length === 0) {
        return setInProgress(0)
      }

      querySnapshot.forEach((doc) => {
        docs.push(doc.data())
      })
      setInProgress(docs.length)
    })
  }

  return inProgress
}
