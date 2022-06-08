import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { notifyTrash } from "./Notify";

export default async function TaskTrash(task) {
  deleteDoc(doc(db, 'tasks', task.id))
  .then(() => {
    notifyTrash(task)
  })
}
