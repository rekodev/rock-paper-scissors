import { Choice } from '../../types/enums';
import ChoiceButton from '../ChoiceButton';
import { StyledGame, StyledGameChoice, StyledGameChoiceWrapper } from './style';
import { choices } from '../../utils/choices';
import Result from '../Result';
import { getResult } from '../../utils/getResult';

interface IGame {
  choiceMade: Choice | null;
  setGameStarted: (gameStarted: boolean) => void;
}

const Game = ({ choiceMade, setGameStarted }: IGame) => {
  const randomChoice = (): Choice => {
    const randomNumber = Math.floor(Math.random() * 5);

    return choices[randomNumber];
  };

  const playerChoice = choiceMade;
  const computerChoice = randomChoice();
  const gameResult = getResult(playerChoice, computerChoice);

  return (
    <StyledGame>
      <StyledGameChoiceWrapper>
        <StyledGameChoice>
          <ChoiceButton choice={choiceMade} />
          <p>YOU PICKED</p>
        </StyledGameChoice>
        <StyledGameChoice>
          <ChoiceButton choice={computerChoice} />
          <p>THE HOUSE PICKED</p>
        </StyledGameChoice>
      </StyledGameChoiceWrapper>
      <Result result={gameResult} setGameStarted={setGameStarted} />
    </StyledGame>
  );
};

export default Game;
