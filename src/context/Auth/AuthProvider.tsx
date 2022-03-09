import { 
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, 
  createUserWithEmailAndPassword as firebaseRegisterWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
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
      if (user) {
        localStorage.setItem("userToken", user.uid);
      } else {
        localStorage.clear();
      }
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

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await firebaseRegisterWithEmailAndPassword(auth, email, password);
    } catch(err) {
      throw err;
    }
  };

  const sendPasswordResetByEmail = async (email: string) => {
    try {
      await firebaseSendPasswordResetEmail(auth, email);      
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
        registerWithEmailAndPassword,
        sendPasswordResetByEmail,
        logOut
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};