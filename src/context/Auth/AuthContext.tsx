import { User } from 'firebase/auth';
import { createContext } from 'react';

export interface AuthState {
  currentUser: User;
};

export interface IAuthContext {
  authState: AuthState;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
};

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);