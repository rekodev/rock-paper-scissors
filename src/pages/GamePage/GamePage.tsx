import { useState } from 'react';
import Button from '../../components/Button';
import Choices from '../../components/Choices';
import Game from '../../components/Game';
import RulesModal from '../../components/RulesModal';
import { Choice } from '../../types/enums';
import { StyledGamePage } from './style';

const GamePage = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [choiceMade, setChoiceMade] = useState<null | Choice>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

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

      <Button variant='outlined' text='rules' onClick={handleOpen} />
      <RulesModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledGamePage>
  );
};

export default GamePage;
