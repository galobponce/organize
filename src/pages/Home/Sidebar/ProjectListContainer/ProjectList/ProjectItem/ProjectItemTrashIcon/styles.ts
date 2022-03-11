import styled from '@emotion/styled';
import { theme } from '@chakra-ui/react';

export const ProjectListItemTrashIcon = styled.div`
  padding-left: .3rem;
  padding-right: .3rem;
  border-radius: 1rem;
  
  &:hover {
    background-color: ${theme.colors.red[200]};
  }
`;