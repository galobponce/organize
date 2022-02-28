import { useNavigate } from 'react-router-dom';
import { FC, FormEvent, useEffect } from 'react';
import { Button, useToast } from '@chakra-ui/react';

import routes from '../../../routes';
import { useForm } from '../../../hooks/useForm';
import { Brand, FormInput } from '../../../common';
import CardFooterButtons from '../CardFooterButtons';
import { useAppContext } from '../../../hooks/useAppContext';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { getMessageFromError, authErrors } from '../../../utils/ErrorUtils';
import { Container, Card, CardTitle, CardBody, ButtonContainer } from '../styles';

const Register: FC = () => {
  const toast = useToast();
  const navitage = useNavigate();
  const { appState, setLoading } = useAppContext();
  const { registerWithEmailAndPassword, logOut } = useAuthContext();

  const [formValues, onInputChange] = useForm({
    email: '',
    password: '',
    repeatedPassword: ''
  });
  const { email, password, repeatedPassword } = formValues;

  useEffect(() => {
    logOut();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (password !== repeatedPassword) throw { code: authErrors.WRONG_PASSWORD };
      await registerWithEmailAndPassword(email, password);
      toast({
        title: 'User Registered Successfully',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
      navitage(routes.LOGIN);
    } catch(err: any) {
      toast({
        title: getMessageFromError(err),
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Brand withSlogan/>
      <Card>
        <CardTitle>Sign Up</CardTitle>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormInput required type='email' name='email' label='Email Address' inputValue={email} onInputChange={onInputChange} />
            <FormInput required type='password' name='password' label='Password' inputValue={password} onInputChange={onInputChange} />
            <FormInput required type='password' name='repeatedPassword' label='Re-enter password' inputValue={repeatedPassword} onInputChange={onInputChange} />
            <ButtonContainer>
              <Button type='submit' colorScheme='teal' size='lg' isLoading={appState.isLoading}>Sign Up</Button>
            </ButtonContainer>
          </form>
        </CardBody>
        <CardFooterButtons currentUrl={routes.REGISTER} />
      </Card>
    </Container>
  );
};

export default Register;