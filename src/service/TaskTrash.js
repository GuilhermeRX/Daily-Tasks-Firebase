import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default async function TaskTrash(id) {
  deleteDoc(doc(db, 'tasks', id))
  .then(() => console.log('Task Removed'))
}
