import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled.div<{ displayMobile: boolean }>`
  position: relative;
  transition: all 0.5s ease;
  z-index: 100;
  background-color: ${theme.colors.gray[50]};
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  box-shadow: 1px 0px 5px 1px rgba(0,0,0,0.22);
  grid-row: 1 / span 4;
  grid-column: 1 / span 1;

  @media all and (max-width: 1050px) {
    grid-row: 1 / span 4;
    grid-column: 1 / span 3;
    right: ${props => props.displayMobile ? '0%' : '100%'};
  }
`;

export const CloseSidebarButtonContainer = styled.div`
  display: none;

  @media all and (max-width: 1050px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1rem;
    padding-top: .5rem;
  }
`;

export const SubtitleContainer = styled.div`
  padding: .2rem;
  padding-left: .5rem;
  padding-right: .5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserIconContainer = styled.div`
  padding: .5rem;
  display: flex;
  justify-content: flex-end;

  @media all and (max-width: 1050px) {
    display: none;
  }
`;