import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import theme from './config/chakra.config';
import { Login, Register, FindAccount } from './pages';
import { AppProvider } from './context/App/AppProvider';
import { AuthProvider } from './context/Auth/AuthProvider';

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
            </Routes>
          </Router>
        </AuthProvider>
      </AppProvider>
    </ChakraProvider>
  );
};

export default App;
