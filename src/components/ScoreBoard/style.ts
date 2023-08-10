import styled from 'styled-components';
import { colorsNeutral } from '../../styles/Theme';
import { Box, Typography } from '@mui/material';

export const StyledScoreBoard = styled.div`
  border: 3px solid ${colorsNeutral.headerOutline};
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const StyledTextWrapper = styled(Box)`
  && {
    color: #fff;
    &&:p {
      line-height: 0;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    line-height: 1;
    font-weight: 600;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`;
