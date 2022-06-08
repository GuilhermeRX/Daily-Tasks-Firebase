import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { notifyStart } from "./Notify"

export async function PlayTask(task) {
  const docRef = doc(db, 'tasks', task.id)
  await updateDoc(docRef, {
    status: 'in progress',
  })
  notifyStart(task)
}
