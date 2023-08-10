import Button from '../Button';
import { StyledResult, StyledResultText } from './style';

interface IResultProps {
  result: string;
  setGameStarted: (gameStarted: boolean) => void;
}

const Result = ({ result, setGameStarted }: IResultProps) => {
  return (
    <StyledResult>
      <StyledResultText>{result}</StyledResultText>
      <Button
        variant='contained'
        text='PLAY AGAIN'
        onClick={() => setGameStarted(false)}
      />
    </StyledResult>
  );
};

export default Result;
