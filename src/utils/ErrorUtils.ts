import { FirebaseError } from 'firebase/app';

export const authErrors = {
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  WEAK_PASSWORD: 'auth/weak-password',
  PASSWORDS_MUST_MATCH: 'auth/passwords-must-match'
};

export const getMessageFromError = (err: FirebaseError) => {
  let message: string;
  switch (err.code) {
    case authErrors.USER_NOT_FOUND:
      message = 'User not found';
      break;

    case authErrors.WRONG_PASSWORD:
      message = 'User\'s credentials does not match';
      break;

    case authErrors.WEAK_PASSWORD:
      message = 'Password should be at least 6 characters';
      break;

    case authErrors.PASSWORDS_MUST_MATCH:
      message = 'Passwords must match';
      break;

    default:
      message = 'There was an error on the server';
      break;
  }
  return message;
};