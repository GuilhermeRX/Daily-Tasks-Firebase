import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function PlayTask(id) {
  const docRef = doc(db, 'tasks', id)
  await updateDoc(docRef, {
    inProgress: true,
  })
  console.log('Task in Progress')
}
