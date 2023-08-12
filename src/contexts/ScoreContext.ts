import { createContext } from 'react';
import { Outcome } from '../types/enums';

export const ScoreContext = createContext({
  score: 0,
  setScore: (_outcome: Outcome) => {},
});
