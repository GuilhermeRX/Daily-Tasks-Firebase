import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

const DoneTask = async (id) => {
  const docRef = doc(db, 'tasks', id)
  await updateDoc(docRef, {
    done: true,
    inProgress: false,
  })
}

export default DoneTask;