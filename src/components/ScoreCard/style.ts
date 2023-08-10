import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import { colorsNeutral } from '../../styles/Theme';

export const StyledScoreCard = styled(Card)`
  && {
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    text-align: center;
    padding: 0.5rem 1.25rem;

    &:last-child {
      padding-bottom: 0.5rem;
    }
  }
`;

export const StyledScoreTextTypography = styled(Typography)`
  && {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 500;
    line-height: 1;
    font-size: 12px;
    color: ${colorsNeutral.scoreText};
    letter-spacing: 0.05rem;
  }
`;

export const StyledScoreTypography = styled(Typography)`
  && {
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 600;
    line-height: 1;
    font-size: 2.6rem;
  }
`;
