import Button from '../Button';
import { StyledResult, StyledResultText } from './style';

interface IResultProps {
  result: string;
  setGameStarted: (gameStarted: boolean) => void;
  setSelected: (selected: boolean) => void;
}

const Result = ({ result, setGameStarted, setSelected }: IResultProps) => {
  const handleClick = () => {
    setGameStarted(false);
    setSelected(false);
  };

  return (
    <StyledResult>
      <StyledResultText>{result}</StyledResultText>
      <Button variant='contained' text='PLAY AGAIN' onClick={handleClick} />
    </StyledResult>
  );
};

export default Result;
