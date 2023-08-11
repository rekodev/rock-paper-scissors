import {
  StyledChoiceButton,
  StyledChoiceButtonBorder,
  StyledChoiceButtonWrapper,
} from './style';
import iconScissors from '../../assets/images/icon-scissors.svg';
import iconRock from '../../assets/images/icon-rock.svg';
import iconPaper from '../../assets/images/icon-paper.svg';
import iconSpock from '../../assets/images/icon-spock.svg';
import iconLizard from '../../assets/images/icon-lizard.svg';
import { Choice } from '../../types/enums';

interface IChoiceButtonProps {
  choice: Choice | null;
  onClick?: () => void;
  gameStarted?: boolean;
}

const choiceIcons = {
  [Choice.Lizard]: iconLizard,
  [Choice.Spock]: iconSpock,
  [Choice.Rock]: iconRock,
  [Choice.Paper]: iconPaper,
  [Choice.Scissors]: iconScissors,
};

const ChoiceButton = ({ choice, onClick, gameStarted }: IChoiceButtonProps) => {
  return (
    <StyledChoiceButtonWrapper $choice={choice}>
      {choice ? (
        <StyledChoiceButtonBorder
          $gameStarted={gameStarted}
          $choice={choice}
          onClick={onClick}
        >
          <StyledChoiceButton>
            {choice && <img src={choiceIcons[choice]} alt={choice} />}
          </StyledChoiceButton>
        </StyledChoiceButtonBorder>
      ) : (
        <StyledChoiceButtonBorder
          $gameStarted={gameStarted}
          $choice={null}
          onClick={onClick}
        >
          <StyledChoiceButton $unselected />
        </StyledChoiceButtonBorder>
      )}
    </StyledChoiceButtonWrapper>
  );
};

export default ChoiceButton;
