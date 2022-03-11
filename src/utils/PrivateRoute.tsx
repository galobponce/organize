import { ElementType, FC } from 'react';
import { Navigate } from 'react-router-dom';

import routes from '../routes';
import { userIdKey } from '../config/localStorageKeys';

export const PrivateRoute: FC<{ component: ElementType }> = ({ component: Component }) => (
  localStorage.getItem(userIdKey) ? <Component /> : <Navigate to={routes.LOGIN} />
);