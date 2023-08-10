import { Choice } from '../../types/enums';
import ChoiceButton from '../ChoiceButton';
import { StyledChoices, StyledPentagon } from './style';
import pentagon from '../../assets/images/bg-pentagon.svg';
import { choices } from '../../utils/choices';

interface IChoices {
  gameStarted: boolean;
  setGameStarted: (started: boolean) => void;
  setChoiceMade: (choiceMade: Choice) => void;
}

const Choices = ({ gameStarted, setGameStarted, setChoiceMade }: IChoices) => {
  const handleClick = (choiceMade: Choice) => {
    setGameStarted(!gameStarted);
    setChoiceMade(choiceMade);
  };

  return (
    <StyledChoices>
      <StyledPentagon>
        <img src={pentagon} alt='pentagon' />
      </StyledPentagon>
      {choices.map((choice: Choice, idx: number) => (
        <ChoiceButton
          key={idx}
          choice={choice}
          onClick={() => handleClick(choice)}
        />
      ))}
    </StyledChoices>
  );
};

export default Choices;
