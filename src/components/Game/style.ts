import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledGame = styled.div`
  font-family: 'Barlow Semi Condensed', sans-serif;
  width: 100%;
  color: #fff;
  max-width: 300px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  justify-content: space-between;
  /* align-self: flex-end; */
  gap: 6rem;
`;

export const StyledGameChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
