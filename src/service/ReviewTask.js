import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const ReviewTask = async (id) => {
  const docRef = doc(db, 'tasks', id);
  await updateDoc(docRef, {
    status: 'review',
  })
}

export default ReviewTask;