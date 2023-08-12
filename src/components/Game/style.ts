import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledGame = styled.div`
  font-family: 'Barlow Semi Condensed', sans-serif;
  width: 100%;
  color: #fff;
  /* max-width: 300px; */
  max-height: 400px;
  display: flex;
  flex-direction: column;

  padding: 2rem 0;
  gap: 4rem;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 100%;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: 100%;
  }
`;

export const StyledGameChoiceWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  gap: 6rem;

  @media screen and (min-width: ${breakpoints.medium}) {
    justify-content: space-between;
  }
`;

export const StyledGameChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  p {
    position: absolute;
    top: 6rem;
    min-width: 130px;
  }

  @media screen and (max-width: 280px) {
    p {
      min-width: 50px;
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    p {
      font-size: 1.4rem;
      position: absolute;
      top: -5rem;
    }
  }
`;
