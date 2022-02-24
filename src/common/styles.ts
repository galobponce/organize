import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const BigTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
`;

export const MidTitle = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
`;

export const SmallTitle = styled.h1`
  font-weight: 700;
`;

export const MutedText = styled.p`
  color: ${theme.colors.teal[500]};
`;

export const Logo = styled(BigTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  cursor: pointer;
  translate: none;
`;

export const InputWrapper = styled.div`
  margin-bottom: .5rem;
`;