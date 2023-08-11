import { Choice } from '../../types/enums';
import ChoiceButton from '../ChoiceButton';
import { StyledGame, StyledGameChoice, StyledGameChoiceWrapper } from './style';
import { choices } from '../../utils/choices';
import Result from '../Result';
import { getResult } from '../../utils/getResult';
import { useState, useEffect } from 'react';

interface IGame {
  choiceMade: Choice | null;
  setGameStarted: (gameStarted: boolean) => void;
}

const Game = ({ choiceMade, setGameStarted }: IGame) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSelected(true);
    }, 3000);
  }, []);

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
          <ChoiceButton gameStarted choice={choiceMade} />
          <p>YOU PICKED</p>
        </StyledGameChoice>
        <StyledGameChoice>
          {selected ? (
            <ChoiceButton gameStarted choice={computerChoice} />
          ) : (
            <ChoiceButton gameStarted choice={null} />
          )}

          <p>THE HOUSE PICKED</p>
        </StyledGameChoice>
      </StyledGameChoiceWrapper>
      {selected && (
        <Result
          result={gameResult}
          setGameStarted={setGameStarted}
          setSelected={setSelected}
        />
      )}
    </StyledGame>
  );
};

export default Game;
