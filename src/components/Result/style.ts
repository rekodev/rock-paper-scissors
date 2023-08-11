import { Button } from '@mui/material';
import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15rem;

  @media screen and (min-width: ${breakpoints.medium}) {
    position: initial;
    /* align-self: center; */
  }
`;

export const StyledResultText = styled.p`
  font-size: 2.375rem;
  margin: 1rem;

  @media screen and (min-width: ${breakpoints.large}) {
    font-size: 4rem;
  }
`;

export const StyledPlayAgainButton = styled(Button)`
  background-color: #fff;
`;
