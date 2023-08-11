import styled from 'styled-components';
import { breakpoints, colorsPrimary } from '../../styles/Theme';
import { Choice } from '../../types/enums';
import { darkerShadow } from '../../utils/darkerShadow';

interface IStyledChoiceButtonProps {
  $choice?: Choice | null;
  $gameStarted?: boolean;
  $unselected?: boolean;
}

const choices = {
  [Choice.Lizard]: colorsPrimary.lizardGradient,
  [Choice.Spock]: colorsPrimary.cyan,
  [Choice.Rock]: colorsPrimary.rockGradient,
  [Choice.Paper]: colorsPrimary.paperGradient,
  [Choice.Scissors]: colorsPrimary.scissorsGradient,
};

export const StyledChoiceButton = styled.div<IStyledChoiceButtonProps>`
  background: ${(props) =>
    props.$unselected ? '#192845' : 'linear-gradient(90deg, #ddd, #f0f0f0)'};
  border-top: ${(props) =>
    props.$unselected ? `2.5px solid #192845` : '2.5px solid lightgray'};
  border-radius: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: calc(40%);
  }
`;

export const StyledChoiceButtonBorder = styled.div<IStyledChoiceButtonProps>`
  background: ${(props) =>
    props.$choice
      ? `linear-gradient(${choices[props.$choice]})`
      : `transparent`};
  padding: 0.675rem;
  border-radius: 50%;
  border-bottom: ${(props) =>
    props.$choice
      ? `3px solid ${darkerShadow(choices[props.$choice], 1, 15)}`
      : '3px solid transparent'};
  height: 4.5rem;
  width: 4.75rem;
  z-index: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 280px) {
    height: 3rem;
    width: 3.25rem;
    padding: 0.4rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    height: ${(props) => (props.$gameStarted ? '8rem' : '5.25rem')};
    width: ${(props) => (props.$gameStarted ? '8.4444rem' : '5.25rem')};
  }

  @media screen and (min-width: ${breakpoints.large}) {
    height: 6rem;
    width: 6.3333rem;
    height: ${(props) => (props.$gameStarted ? '12rem' : '6rem')};
    width: ${(props) => (props.$gameStarted ? '12.6666rem' : '6.3333rem')};
  }

  @media screen and (min-width: ${breakpoints.xlarge}) {
    height: 6.6315rem;
    width: 7rem;
    height: ${(props) => (props.$gameStarted ? '16rem' : '6.315rem')};
    width: ${(props) => (props.$gameStarted ? '16.8888rem' : '7rem')};
  }
`;

export const StyledChoiceButtonWrapper = styled.div<IStyledChoiceButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  grid-column: ${(props) =>
    props.$choice === Choice.Scissors
      ? '1 / span 7'
      : props.$choice === Choice.Paper
      ? '6 / span 2'
      : props.$choice === Choice.Rock
      ? '5 / span 2'
      : props.$choice === Choice.Spock
      ? '1 / span 2'
      : props.$choice === Choice.Lizard
      ? '2 / span 2'
      : 'auto'};

  grid-row: ${(props) =>
    props.$choice === Choice.Scissors
      ? '1 / span 2'
      : props.$choice === Choice.Paper
      ? '1 / span 4'
      : props.$choice === Choice.Rock
      ? '4 / span 1'
      : props.$choice === Choice.Spock
      ? '1 / span 4'
      : props.$choice === Choice.Lizard
      ? '4 / span 1'
      : 'auto'};
`;
