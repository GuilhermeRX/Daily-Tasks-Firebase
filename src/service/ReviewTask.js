import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { notifyReview } from "./Notify";

const ReviewTask = async (task) => {
  const docRef = doc(db, 'tasks', task.id);
  await updateDoc(docRef, {
    status: 'review',
  })
  notifyReview(task)
}

export default ReviewTask;