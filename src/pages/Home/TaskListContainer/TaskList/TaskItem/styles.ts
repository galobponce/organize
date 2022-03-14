import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const TaskListItem = styled.div`
  padding: .30rem;
  padding-left: .8rem;
  padding-right: .8rem;
  width: 98%;
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-radius: .8rem;

  &:hover {
    background-color: ${theme.colors.gray[100]};
  }

  &:focus {
    background-color: ${theme.colors.gray[100]};
  }
`;