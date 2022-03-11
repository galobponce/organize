import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const ProjectListItem = styled.button<{ selected: boolean }>`
  padding: .15rem;
  padding-left: .8rem;
  padding-right: .8rem;
  width: 100%;
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  alignt-items: center;
  border-top-right-radius: .8rem;
  border-bottom-right-radius: .8rem;
  background-color: ${props => props.selected ? theme.colors.gray[200] : 'initial'};
  font-weight: ${props => props.selected ? 'bold' : 'initial'};
  
  &:hover {
    background-color: ${props => props.selected ? theme.colors.gray[200] : theme.colors.gray[100]};
  }
  
  &:focus {
    background-color: ${props => props.selected ? theme.colors.gray[200] : theme.colors.gray[100]};
  }
`;