import { FC, FormEvent, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

import routes from '../../../routes';
import { useForm } from '../../../hooks/useForm';
import { Brand, FormInput } from '../../../common';
import CardFooterButtons from '../CardFooterButtons';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { Container, Card, CardTitle, CardBody, ButtonContainer } from '../styles';

const Register: FC = () => {
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
      if (password !== repeatedPassword) throw { }; // TODO: Auth error
      await registerWithEmailAndPassword(email, password);
    } catch(err: any) {
      // TODO: Error alert
    } finally {
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
              <Button type='submit' colorScheme='teal' size='lg'>Sign Up</Button>
            </ButtonContainer>
          </form>
        </CardBody>
        <CardFooterButtons currentUrl={routes.REGISTER} />
      </Card>
    </Container>
  );
};

export default Register;