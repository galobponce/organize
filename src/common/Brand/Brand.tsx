import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Logo, MutedText } from '../styles';

interface IBrand {
  withSlogan?: boolean;
};

const Brand: FC<IBrand> = ({ withSlogan }) => {
  return (
    <Box>
      <Logo className='notranslate unselectable'>Organize</Logo>
      { withSlogan ? <MutedText>Organize your projects easily and quickly</MutedText> : null }
    </Box>
  );
}

export default Brand;