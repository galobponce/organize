import { useNavigate } from 'react-router-dom';
import { FC, FormEvent, useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import routes from '../../../routes';
import { useForm } from '../../../hooks/useForm';
import { Brand, FormInput } from '../../../common';
import CardFooterButtons from '../CardFooterButtons';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { getMessageFromError } from '../../../utils/ErrorUtils';
import { Container, Card, CardTitle, CardBody, ButtonContainer } from '../styles';

const Login: FC = () => {
  const toast = useToast();
  const navitage = useNavigate();
  const { authState, signInWithEmailAndPassword, logOut } = useAuthContext();

  const [formValues, onInputChange] = useForm({
    email: '',
    password: ''
  });
  const { email, password } = formValues;

  useEffect(() => {
    logOut();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
      toast({
        title: 'User Logged In Successfully',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
      navitage(routes.HOME);
    } catch(err: any) {
      toast({
        title: getMessageFromError(err),
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Container>
      <Brand withSlogan/>
      <Card>
        <CardTitle>Log in</CardTitle>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormInput required type='email' name='email' label='Email Address' inputValue={email} onInputChange={onInputChange} />
            <FormInput required type='password' name='password' label='Password' inputValue={password} onInputChange={onInputChange} />
            <ButtonContainer>
              <Button type='submit' colorScheme='teal' size='lg' isLoading={authState.isAuthLoading}>Log In</Button>
            </ButtonContainer>
          </form>
        </CardBody>
        <CardFooterButtons currentUrl={routes.LOGIN} />
      </Card>
    </Container>
  );
};

export default Login;