import {
  StyledCardContent,
  StyledScoreCard,
  StyledScoreTextTypography,
  StyledScoreTypography,
} from './style';

interface IScoreCardProps {
  score?: number;
}

const ScoreCard = ({ score }: IScoreCardProps) => {
  return (
    <StyledScoreCard>
      <StyledCardContent>
        <StyledScoreTextTypography>SCORE</StyledScoreTextTypography>
        <StyledScoreTypography>{score ? score : 12}</StyledScoreTypography>
      </StyledCardContent>
    </StyledScoreCard>
  );
};

export default ScoreCard;
