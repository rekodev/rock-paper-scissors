import styled from 'styled-components';
import { colorsPrimary } from '../../styles/Theme';
import { Choice } from '../../types/enums';
import { darkerShadow } from '../../utils/darkerShadow';

interface IStyledChoiceButtonProps {
  $choice: Choice | null;
}

const choices = {
  [Choice.Lizard]: colorsPrimary.lizardGradient,
  [Choice.Spock]: colorsPrimary.cyan,
  [Choice.Rock]: colorsPrimary.rockGradient,
  [Choice.Paper]: colorsPrimary.paperGradient,
  [Choice.Scissors]: colorsPrimary.scissorsGradient,
};

export const StyledChoiceButton = styled.div`
  background: linear-gradient(90deg, #ddd, #f0f0f0);
  border-top: 2.5px solid lightgray;
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
    props.$choice ? `linear-gradient(${choices[props.$choice]})` : 'intial'};
  padding: 0.675rem;
  border-radius: 50%;
  border-bottom: ${(props) =>
    props.$choice
      ? `3px solid ${darkerShadow(choices[props.$choice], 1, 15)}`
      : 'initial'};
  height: 4.5rem;
  width: 4.75rem;
  z-index: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
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
