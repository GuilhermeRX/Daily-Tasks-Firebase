import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { notifyReview } from "./Notify";

const ReviewTask = async (task, setSelect) => {
  const docRef = doc(db, 'tasks', task.id);
  await updateDoc(docRef, {
    status: 'review',
  })
  notifyReview(task)
  setSelect('review')
}

export default ReviewTask;