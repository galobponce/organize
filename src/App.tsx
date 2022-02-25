import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import { Login } from './pages';
import theme from './config/chakra.config';
import { AuthProvider } from './context/Auth/AuthProvider';

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path={routes.DEFAULT} element={<Navigate to={routes.LOGIN} />} />
            <Route path={routes.LOGIN} element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
