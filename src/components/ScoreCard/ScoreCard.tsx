import { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';
import {
  StyledCardContent,
  StyledScoreCard,
  StyledScoreTextTypography,
  StyledScoreTypography,
} from './style';

const ScoreCard = () => {
  const { score } = useContext(ScoreContext);

  return (
    <StyledScoreCard>
      <StyledCardContent>
        <StyledScoreTextTypography>SCORE</StyledScoreTextTypography>
        <StyledScoreTypography>{score}</StyledScoreTypography>
      </StyledCardContent>
    </StyledScoreCard>
  );
};

export default ScoreCard;
