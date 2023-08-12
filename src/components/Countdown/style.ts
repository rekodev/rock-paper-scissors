import { Typography } from '@mui/material';
import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledCountdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25rem;

  @media screen and (min-width: ${breakpoints.medium}) {
    position: initial;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    font-size: 6rem;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`;
