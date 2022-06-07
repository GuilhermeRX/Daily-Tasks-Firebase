import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { db } from "../service/firebase";


export default function useReview() {
  const {user} = useContext(AppContext)
  const [review, setReview] = useState(0)

  if (user.uid) {
    const collectionRef = collection(db, 'tasks');

    const searchQuery =  query(
      collectionRef,
      where('uid', '==', user.uid),
      where('status', '==', 'review'),
    );
  
    onSnapshot(searchQuery, (querySnapshot) => {
      const docs = [];
      if(querySnapshot.docs.length === 0) {
        return setReview(0)
      }
      querySnapshot.forEach((doc) => {
        docs.push(doc.data())
      })
      setReview(docs.length)
    })
  }
  return review
}
