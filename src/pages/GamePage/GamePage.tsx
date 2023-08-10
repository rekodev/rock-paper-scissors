import { useState } from 'react';
import Button from '../../components/Button';
import Choices from '../../components/Choices';
import { StyledGamePage } from './style';
import { Choice } from '../../types/enums';
import Game from '../../components/Game';

const GamePage = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [choiceMade, setChoiceMade] = useState<null | Choice>(null);

  return (
    <StyledGamePage>
      {gameStarted ? (
        <Game choiceMade={choiceMade} setGameStarted={setGameStarted} />
      ) : (
        <Choices
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          setChoiceMade={setChoiceMade}
        />
      )}

      <Button variant='outlined' text='rules' onClick={() => console.log('')} />
    </StyledGamePage>
  );
};

export default GamePage;
