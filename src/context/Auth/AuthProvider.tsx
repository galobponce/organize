import { 
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, 
  createUserWithEmailAndPassword as firebaseRegisterWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail
} from 'firebase/auth';
import { FC, useEffect, useReducer } from 'react';

import { auth } from '../../config/firebase.config';
import { AuthContext, AuthState } from './AuthContext';
import { userIdKey } from '../../config/localStorageKeys';
import { authReducer, AuthReducerActions } from './authReducer';

const INITIAL_STATE: AuthState = {
  isAuthLoading: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const AuthProvider: FC<IChildrenProps> = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user && user.uid) {
        // Saves userid at localstorage so refreshing page does not sends user to login
        localStorage.setItem(userIdKey, user.uid);
      } else {
        localStorage.clear();
      }
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

  const setAuthLoading = (bool: boolean) => {
    authDispatch({ type: AuthReducerActions.SET_LOADING, payload: { bool } });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signInWithEmailAndPassword,
        registerWithEmailAndPassword,
        sendPasswordResetByEmail,
        logOut,
        setAuthLoading
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};