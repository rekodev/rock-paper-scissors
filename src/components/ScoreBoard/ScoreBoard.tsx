import ScoreCard from '../ScoreCard';
import { StyledScoreBoard, StyledTextWrapper, StyledTypography } from './style';

const ScoreBoard = () => {
  return (
    <StyledScoreBoard>
      <StyledTextWrapper>
        <StyledTypography>ROCK</StyledTypography>
        <StyledTypography>PAPER</StyledTypography>
        <StyledTypography>SCISSORS</StyledTypography>
        <StyledTypography>LIZARD</StyledTypography>
      </StyledTextWrapper>

      <ScoreCard />
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
