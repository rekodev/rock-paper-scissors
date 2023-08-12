import { useContext, useEffect } from 'react';
import Button from '../Button';
import { StyledResult, StyledResultText } from './style';
import { ScoreContext } from '../../contexts/ScoreContext';
import { Outcome } from '../../types/enums';

interface IResultProps {
  result: Outcome;
  setGameStarted: (gameStarted: boolean) => void;
  setSelected: (selected: boolean) => void;
}

const Result = ({ result, setGameStarted, setSelected }: IResultProps) => {
  const { setScore } = useContext(ScoreContext);

  const handleClick = () => {
    setGameStarted(false);
    setSelected(false);
  };

  useEffect(() => {
    setScore(result);
  }, []);

  return (
    <StyledResult>
      <StyledResultText>{result}</StyledResultText>
      <Button variant='contained' text='PLAY AGAIN' onClick={handleClick} />
    </StyledResult>
  );
};

export default Result;
