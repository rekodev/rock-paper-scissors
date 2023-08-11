import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledChoices = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  max-width: 300px;
  max-height: 400px;
  position: relative;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 500px;
    max-height: calc(2000px / 3);
    margin-top: -50px;
  }
`;

export const StyledPentagon = styled.div`
  position: absolute;
  width: 75%;
  align-self: center;
  left: 12.5%;
  top: 17.5%;
  z-index: -1;

  @media screen and (min-width: ${breakpoints.medium}) {
    top: 20%;
  }

  @media screen and (max-width: 280px) {
    top: 20%;
    left: 10%;
    width: 80%;
  }
`;
