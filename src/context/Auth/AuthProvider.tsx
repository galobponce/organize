import { 
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, 
  User 
} from 'firebase/auth';
import { FC, useEffect, useState } from 'react';

import { AuthContext } from './AuthContext';
import { auth } from '../../config/firebase.config';

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const AuthProvider: FC<IChildrenProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user as User);
    });
  }, []);

  const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await firebaseSignInWithEmailAndPassword(auth, email, password);
    } catch(err) {
      throw err;
    }
  };
  
  const logOut = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        authState: {
          currentUser
        },
        signInWithEmailAndPassword,
        logOut,
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};