import { ElementType, FC } from 'react';
import { Navigate } from 'react-router-dom';

import routes from '../routes';
import { useAuthContext } from '../hooks/useAuthContext';

export const PrivateRoute: FC<{ component: ElementType }> = ({ component: Component }) => {
  const { authState } = useAuthContext();

  return authState.currentUser ? <Component /> : <Navigate to={routes.LOGIN} />;
};