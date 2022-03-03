import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';

import { firestore } from '../config/firebase.config';
import { Project } from '../context/Project/ProjectContext';

export const QueryUserProjects = async (user: string): Promise<Project[]> => {
  const data = await getDocs(query(collection(firestore, 'projects'), where('user', '==', user)));
  return data.docs.map(doc => ({ ...{ id: doc.id, ...doc.data() } } as Project));
};

export const AddProject = async (name: string, user: string): Promise<string> => {
  const docRef = await addDoc(collection(firestore, 'projects'), {
    name,
    user
  });
  return docRef.id;
};

export const DeleteProject = async (id: string): Promise<void> => {
  await deleteDoc(doc(firestore, 'projects', id));
};
