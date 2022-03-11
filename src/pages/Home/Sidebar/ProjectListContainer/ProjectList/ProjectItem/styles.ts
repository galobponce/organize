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
  
  &:hover {
    background-color: #e9ecef;
  }
  
  &:focus {
    background-color: #e9ecef;
  }
  
  background-color: ${props => props.selected ? '#e9ecef' : 'initial'}
`;