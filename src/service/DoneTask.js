import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { notifyDone } from "./Notify";

const DoneTask = async (task, setSelect) => {
  const docRef = doc(db, 'tasks', task.id)
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const result = docSnap.data()
    const inicio = new Date(result.dateStart)
    const fim =  new Date()
    const diferenca = fim.getTime() - inicio.getTime()
    const dateResult = new Date(diferenca)
    const duration = `${dateResult.getUTCHours()}H${dateResult.getUTCMinutes()}m${dateResult.getUTCSeconds()}s`;
    
    await updateDoc(docRef, {
      status: 'done',
      doneDate: Date.now(),
      duration,
    })
    notifyDone(task)
    setSelect('done')
  }
}

export default DoneTask;