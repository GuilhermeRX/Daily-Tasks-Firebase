import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function PlayTask(id) {
  const docRef = doc(db, 'tasks', id)
  await updateDoc(docRef, {
    status: 'in progress',
  })
  console.log('Task in Progress')
}
