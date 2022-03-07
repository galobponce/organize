import { FC } from 'react';

import { Container } from './styles';
import UserIcon from '../UserIcon/UserIcon';
import MobileNavButton from './MobileNavButton';

const MobileNav: FC = () => {
  return (
    <Container>
      <MobileNavButton />
      <UserIcon />
    </Container>
  );
};

export default MobileNav;