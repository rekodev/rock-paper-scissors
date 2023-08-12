import { useEffect, useState } from 'react';
import { Choice } from '../../types/enums';
import { choices } from '../../utils/choices';
import { getResult } from '../../utils/getResult';
import ChoiceButton from '../ChoiceButton';
import Countdown from '../Countdown';
import Result from '../Result';
import {
  StyledGame,
  StyledGameChoice,
  StyledGameChoiceWrapper,
  StyledWinEffectLayerOne,
  StyledWinEffectLayerThree,
  StyledWinEffectLayerTwo,
} from './style';

interface IGame {
  choiceMade: Choice | null;
  setGameStarted: (gameStarted: boolean) => void;
}

const Game = ({ choiceMade, setGameStarted }: IGame) => {
  const [selected, setSelected] = useState(false);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  useEffect(() => {
    setComputerChoice(randomChoice());

    const timerId = setTimeout(() => {
      setSelected(true);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  const randomChoice = (): Choice => {
    const randomNumber = Math.floor(Math.random() * 5);

    return choices[randomNumber];
  };

  const gameResult = getResult(choiceMade, computerChoice);

  return (
    <StyledGame>
      <StyledGameChoiceWrapper>
        <StyledGameChoice>
          {selected && gameResult === 'YOU WIN' && (
            <>
              <StyledWinEffectLayerOne />
              <StyledWinEffectLayerTwo />
              <StyledWinEffectLayerThree />
            </>
          )}

          <ChoiceButton gameStarted choice={choiceMade} />
          <p>YOU PICKED</p>
        </StyledGameChoice>

        {selected ? (
          <Result
            result={gameResult}
            setGameStarted={setGameStarted}
            setSelected={setSelected}
          />
        ) : (
          <Countdown />
        )}

        <StyledGameChoice>
          {selected && gameResult === 'YOU LOSE' && (
            <>
              <StyledWinEffectLayerOne />
              <StyledWinEffectLayerTwo />
              <StyledWinEffectLayerThree />
            </>
          )}

          {selected ? (
            <ChoiceButton gameStarted choice={computerChoice} />
          ) : (
            <ChoiceButton gameStarted choice={null} />
          )}

          <p>THE HOUSE PICKED</p>
        </StyledGameChoice>
      </StyledGameChoiceWrapper>
    </StyledGame>
  );
};

export default Game;
