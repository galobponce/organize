import styled from '@emotion/styled';
import { theme } from '@chakra-ui/react';

export const Container = styled.div`
  background-color: ${theme.colors.gray[100]};
  height: 100%;
  display: grid;
  grid-template-rows: 3rem 1fr 1fr 1fr;
  grid-template-columns: .6fr 1fr 1fr;
`;

export const ChildContainer = styled.div`
  margin: .5rem;
  border-radius: .5rem;
  grid-row: 1 / span 4;
  grid-column: 2 / span 2;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.22);
  background-color: ${theme.colors.gray[50]};

  @media all and (max-width: 1050px) {
    grid-row: 2 / span 4;
    grid-column: 1 / span 3;
  }
`;