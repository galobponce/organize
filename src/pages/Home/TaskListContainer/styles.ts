import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 1rem;
  text-align: center;
`;

export const BackButtonWithTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media all and (max-width: 1050px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;

  @media all and (max-width: 1050px) {
    width: 100%;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ChildContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 3rem;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: flex-start;
  align-self: center;
  width: 95%;
`;