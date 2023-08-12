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
    props.$gameStarted
      ? '3.75px solid lightgray'
      : props.$unselected
      ? '3.75px solid #192845'
      : '3.75px solid lightgray'};
  border-radius: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;

  img {
    width: calc(40%);
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    border-top: ${(props) =>
      props.$gameStarted
        ? '5px solid lightgray'
        : props.$unselected
        ? '5px solid #192845'
        : '3.75px solid lightgray'};
  }

  @media screen and (min-width: ${breakpoints.large}) {
    border-top: ${(props) =>
      props.$gameStarted
        ? '7.5px solid lightgray'
        : props.$unselected
        ? '7.5px solid #192845'
        : '3.75px solid lightgray'};
  }

  @media screen and (min-width: ${breakpoints.xlarge}) {
    border-top: ${(props) =>
      props.$gameStarted
        ? '10px solid lightgray'
        : props.$unselected
        ? '10px solid #192845'
        : '5px solid lightgray'};
  }
`;

export const StyledChoiceButtonBorder = styled.div<IStyledChoiceButtonProps>`
  background: ${(props) =>
    props.$choice
      ? `linear-gradient(${choices[props.$choice]})`
      : `transparent`};
  padding: 0.675rem;
  border-radius: 50%;
  border-bottom: ${(props) => {
    if (props.$gameStarted && props.$choice) {
      return `3.75px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
    }
    if (!props.$gameStarted && props.$choice) {
      return `3.75px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
    }
    return '3.75px solid transparent';
  }};
  height: 4.5rem;
  width: 4.66666rem;
  z-index: 0;
  transition: transform 0.01s ease-in;

  &:hover {
    transform: ${(props) => (props.$gameStarted ? 'none' : 'scale(1.1)')};
    cursor: ${(props) => (props.$gameStarted ? 'initial' : 'pointer')};
  }

  @media screen and (max-width: 280px) {
    height: 3rem;
    width: 3.25rem;
    padding: 0.4rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    height: ${(props) => (props.$gameStarted ? '8rem' : '5.25rem')};
    width: ${(props) => (props.$gameStarted ? '8.4444rem' : '5.5555rem')};
    padding: ${(props) => (props.$gameStarted ? '1.25rem' : '0.675rem')};
    border-bottom: ${(props) => {
      if (props.$gameStarted && props.$choice) {
        return `5px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      if (!props.$gameStarted && props.$choice) {
        return `3.75px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      return '5px solid transparent';
    }};
  }

  @media screen and (min-width: ${breakpoints.large}) {
    height: ${(props) => (props.$gameStarted ? '10rem' : '5rem')};
    width: ${(props) => (props.$gameStarted ? '10.5555rem' : '5.25rem')};
    padding: ${(props) => (props.$gameStarted ? '1.75rem' : '0.8rem')};
    border-bottom: ${(props) => {
      if (props.$gameStarted && props.$choice) {
        return `7.5px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      if (!props.$gameStarted && props.$choice) {
        return `3.75px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      return '7.5px solid transparent';
    }};
  }

  @media screen and (min-width: ${breakpoints.xlarge}) {
    height: 6.6315rem;
    width: 7rem;
    height: ${(props) => (props.$gameStarted ? '16rem' : '6.315rem')};
    width: ${(props) => (props.$gameStarted ? '16.8888rem' : '7rem')};
    padding: ${(props) => (props.$gameStarted ? '2rem' : '1rem')};
    border-bottom: ${(props) => {
      if (props.$gameStarted && props.$choice) {
        return `10px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      if (!props.$gameStarted && props.$choice) {
        return `5px solid ${darkerShadow(choices[props.$choice], 1, 15)}`;
      }
      return '10px solid transparent';
    }};
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
