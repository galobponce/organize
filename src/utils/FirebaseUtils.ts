import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, Timestamp, where, writeBatch } from 'firebase/firestore';

import { Task } from '../context/Task/TaskContext';
import { firestore } from '../config/firebase.config';
import { Project } from '../context/Project/ProjectContext';

export const QueryUserProjects = async (user: string): Promise<Project[]> => {
  const data = await getDocs(query(collection(firestore, 'projects'), where('user', '==', user)));
  return data.docs.map(doc => ({ ...{ id: doc.id, ...doc.data() } } as Project));
};

export const QueryUserTasksByProject = async (project_id: string, user: string): Promise<Task[]> => {
  const data = await getDocs(query(collection(firestore, 'tasks'), where('user', '==', user), where('project_id', '==', project_id)));
  return data.docs.map(doc => (
    { 
      ...{
        id: doc.id, 
        ...doc.data(), 
        creation_date: doc.data().creation_date.toDate(), 
        due_date: doc.data().due_date ? (doc.data().due_date.toDate ? doc.data().due_date.toDate() : null) : null
      } 
    } as Task
  ));
};

export const AddProject = async (project: Project): Promise<string> => {
  const docRef = await addDoc(collection(firestore, 'projects'), {
    name: project.name,
    user: project.user
  });
  return docRef.id;
};

export const DeleteProject = async (project_id: string): Promise<void> => {
  const data = await getDocs(query(collection(firestore, 'tasks'), where('project_id', '==', project_id)));
  
  // Transaction to delete a project and all its tasks
  const batch = writeBatch(firestore);
  data.forEach(doc => {
    batch.delete(doc.ref);
  });
  batch.delete(doc(firestore, 'projects', project_id));

  await batch.commit();
};

export const AddTask = async (task: Task): Promise<string> => {
  const docRef = await addDoc(collection(firestore, 'tasks'), {
    name: task.name,
    description: task.description,
    user: task.user,
    project_id: task.project_id,
    creation_date: task.creation_date,
    due_date: task.due_date ? Timestamp.fromDate(task.due_date) : null,
    done: task.done
  });
  return docRef.id;
};

export const DeleteTask = async (task_id: string): Promise<void> => {
  await deleteDoc(doc(firestore, 'tasks', task_id));
};

export const ModifyTask = async (task: Task): Promise<void> => {
  if (!task.id) return;
  await setDoc(doc(firestore, 'tasks', task.id), { ...task, due_date: task.due_date ? Timestamp.fromDate(task.due_date) : null});
};