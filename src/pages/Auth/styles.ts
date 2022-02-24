import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { MidTitle } from '../../common/styles';

export const Container = styled.div`
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-flow: column;
  gap: 3rem;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.colors.gray[50]};
`;

export const Card = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.22);
  background-color: ${theme.colors.white};
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  width: 30rem;

  @media all and (max-width: 420px) {
    width: 24rem;
  }

  @media all and (max-width: 330px) {
    width: 20rem;
  }
`;

export const CardBody = styled.div<{ center?: boolean }>`
  text-align: ${props => props.center ? 'center' : 'left'};
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

export const CardTitle = styled(MidTitle)`
  margin-top: .5rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: nowrap column;
  width: 100%;
  margin-top: 1.5rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 1rem;
  text-align: center;
`;