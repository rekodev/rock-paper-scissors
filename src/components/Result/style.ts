import { Button } from '@mui/material';
import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.medium}) {
    position: absolute;
    align-self: center;
  }
`;

export const StyledResultText = styled.p`
  font-size: 3rem;
  margin: 1rem;
`;

export const StyledPlayAgainButton = styled(Button)`
  background-color: #fff;
`;
