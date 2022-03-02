import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import theme from './config/chakra.config';
import { PrivateRoute } from './utils/PrivateRoute';
import { AppProvider } from './context/App/AppProvider';
import { AuthProvider } from './context/Auth/AuthProvider';
import { Login, Register, FindAccount, Home } from './pages';

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path={routes.DEFAULT} element={<Navigate to={routes.LOGIN} />} />
              <Route path={routes.LOGIN} element={<Login />} />
              <Route path={routes.REGISTER} element={<Register />} />
              <Route path={routes.FIND_ACCOUNT} element={<FindAccount />} />
              <Route path={routes.HOME} element={
                <PrivateRoute component={Home} />
              } 
              />
            </Routes>
          </Router>
        </AuthProvider>
      </AppProvider>
    </ChakraProvider>
  );
};

export default App;
