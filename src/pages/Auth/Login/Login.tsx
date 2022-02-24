import { FC, FormEvent } from 'react';
import { Button } from '@chakra-ui/react';

import routes from '../../../routes';
import { useForm } from '../../../hooks/useForm';
import { Brand, FormInput } from '../../../common';
import CardFooterButtons from '../CardFooterButtons';
import { Container, Card, CardTitle, CardBody, ButtonContainer } from '../styles';

const Login: FC = () => {

  const [formValues, onInputChange] = useForm({
    email: '',
    password: ''
  });
  const { email, password } = formValues;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <Button type='submit' colorScheme='teal' size='lg'>Log In</Button>
            </ButtonContainer>
          </form>
        </CardBody>
        <CardFooterButtons currentUrl={routes.LOGIN} />
      </Card>
    </Container>
  );
};

export default Login;