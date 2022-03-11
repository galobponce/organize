import { Button, useToast } from '@chakra-ui/react';
import { FC, useState, useEffect, FormEvent } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import routes from '../../../routes';
import { FormInput } from '../../../common';
import { useForm } from '../../../hooks/useForm';
import { MutedText } from '../../../common/styles';
import CardFooterButtons from '../CardFooterButtons';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { getMessageFromError } from '../../../utils/ErrorUtils';
import { Container, Card, CardTitle, CardBody, ButtonContainer } from '../styles';

const FindAccount: FC = () => {
  const toast = useToast();
  const [emailSent, setEmailSent] = useState(false);
  const { authState, sendPasswordResetByEmail, logOut, setAuthLoading } = useAuthContext();

  const [formValues, onInputChange] = useForm({
    email: '',
  });
  const { email } = formValues;

  useEffect(() => {
    logOut();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setAuthLoading(true);
      await sendPasswordResetByEmail(email);
      setEmailSent(true);
    } catch(err: any) {
      toast({
        title: getMessageFromError(err),
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <Container>
      <Card>
        { emailSent ?
          <>
            <CardTitle><FontAwesomeIcon icon={faPaperPlane} /></CardTitle>
            <CardTitle>Recovery mail sent!</CardTitle>
            <CardBody center>
              <MutedText>Check your inbox to recover your password.</MutedText>
            </CardBody>
            <CardFooterButtons emailSent currentUrl={routes.FIND_ACCOUNT} />
          </>
          :
          <>
            <CardTitle>Find your account</CardTitle>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <FormInput required type='email' name='email' label='Email Address' inputValue={email} onInputChange={onInputChange} />
                <ButtonContainer>
                  <Button type='submit' colorScheme='teal' size='lg' isLoading={authState.isAuthLoading}>Search</Button>
                </ButtonContainer>
              </form>
            </CardBody>
            <CardFooterButtons emailSent={emailSent} currentUrl={routes.FIND_ACCOUNT} />
          </>
        }
      </Card>
    </Container>
  );
};

export default FindAccount;