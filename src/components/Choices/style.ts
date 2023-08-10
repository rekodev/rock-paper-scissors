import styled from 'styled-components';

export const StyledChoices = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  max-width: 300px;
  max-height: 400px;
  position: relative;
  margin: 0 auto;
`;

export const StyledPentagon = styled.div`
  position: absolute;
  width: 75%;
  align-self: center;
  left: 12.5%;
  top: 17.5%;
  z-index: -1;
`;
