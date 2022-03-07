import styled from '@emotion/styled';

export const Container = styled.div`
  display: none;
  grid-row: 1 / span 1;
  grid-column: 1 / span 3;
  
  @media all and (max-width: 1050px) {
    display: flex;
    margin-left: .2rem;
    margin-right: .2rem;
    justify-content: space-between;
    align-items: center;
  }
`;