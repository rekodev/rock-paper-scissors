import { Choice } from '../types/enums';

export const getResult = (
  playerChoice: Choice | null,
  computerChoice: Choice | null
) => {
  switch (playerChoice! + computerChoice!) {
    case 'RockScissors':
    case 'RockLizard':
    case 'PaperRock':
    case 'PaperSpock':
    case 'ScissorsPaper':
    case 'ScissorsLizard':
    case 'LizardPaper':
    case 'LizardSpock':
    case 'SpockRock':
    case 'SpockScissors':
      return 'YOU WIN';
    case 'ScissorsRock':
    case 'ScissorsSpock':
    case 'RockPaper':
    case 'RockSpock':
    case 'PaperScissors':
    case 'PaperLizard':
    case 'LizardScissors':
    case 'LizardRock':
    case 'SpockPaper':
    case 'SpockLizard':
      return 'YOU LOSE';
    default:
      return 'DRAW';
  }
};
