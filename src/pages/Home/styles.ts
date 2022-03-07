import styled from '@emotion/styled';
import { theme } from '@chakra-ui/react';

export const Container = styled.div`
  background-color: ${theme.colors.gray[100]};
  height: 100%;
  display: grid;
  grid-template-rows: 3rem 1fr 1fr 1fr;
  grid-template-columns: .6fr 1fr 1fr;
`;