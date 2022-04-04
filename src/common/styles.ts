import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const blackGrayColored = styled.h1`
  color: ${theme.colors.gray[600]};
`;

export const BigTitle = styled(blackGrayColored)`
  font-weight: 700;
  font-size: 3rem;
`;

export const MidTitle = styled(blackGrayColored)`
  font-weight: 700;
  font-size: 2.4rem;
`;

export const SmallTitle = styled(blackGrayColored)`
  font-weight: 700;
  font-size: 1.4rem;
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
  color: ${theme.colors.gray[700]};
  user-select: none;
`;

export const InputWrapper = styled.div`
  margin-bottom: .5rem;
`;

export const VerticalEmptySeparator = styled.div<{ size: 'sm' | 'xl' }>`
  margin-top: ${props => props.size === 'sm' ? '1rem' : '3rem'};
`;

export const LoaderSmallContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;