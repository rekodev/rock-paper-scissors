import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledGame = styled.div`
  font-family: 'Barlow Semi Condensed', sans-serif;
  width: 100%;
  color: #fff;
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

export const StyledWinEffectLayerOne = styled.div`
  height: 140%;
  width: 140%;
  position: absolute;
  background: #2b3858;
  border-radius: 50%;
  z-index: -1;
`;

export const StyledWinEffectLayerTwo = styled.div`
  height: 180%;
  width: 180%;
  position: absolute;
  background: #263554;
  border-radius: 50%;
  z-index: -2;
  opacity: 0.75;
`;

export const StyledWinEffectLayerThree = styled.div`
  height: 230%;
  width: 230%;
  position: absolute;
  background: #223351;
  border-radius: 50%;
  z-index: -3;
  opacity: 0.5;
`;
