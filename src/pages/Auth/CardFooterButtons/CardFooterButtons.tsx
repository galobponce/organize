import { FC } from 'react';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import routes from '../../../routes';
import { CardFooter } from '../styles';

interface ICardFooterButtons { 
  currentUrl: string;
  emailSent?: boolean;
}

const CardFooterButtons: FC<ICardFooterButtons> = ({ currentUrl, emailSent }) => {  
  return (
    <CardFooter>

      { currentUrl === routes.LOGIN ? 
        <>
          <Link as={RouterLink} color='gray' to={routes.FIND_ACCOUNT}>Forgot your account?</Link>
          <Link as={RouterLink} color='gray' to={routes.REGISTER}>Don't have an account?</Link>
        </>
      : null }

      { currentUrl === routes.REGISTER ? 
        <>
          <Link as={RouterLink} color='gray' to={routes.LOGIN}>Already have an account?</Link>
        </>
      : null }

      { currentUrl === routes.FIND_ACCOUNT ? 
        <>
          <Link as={RouterLink} color='gray' to={routes.LOGIN}>{ emailSent ? 'Login' : 'Cancel' }</Link>
        </>
      : null }

    </CardFooter>
  );
};

export default CardFooterButtons;