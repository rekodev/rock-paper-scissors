import { ReactNode, useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { StyledLayout } from './style';
import { ScoreContext } from '../../contexts/ScoreContext';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem('score');
    return storedScore ? parseInt(storedScore, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  const scoreSetter = (outcome: string) => {
    if (outcome === 'YOU LOSE') {
      setScore((prev) => prev - 1);
    } else if (outcome === 'YOU WIN') {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <StyledLayout>
      <ScoreContext.Provider
        value={{
          score: score,
          setScore: scoreSetter,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </ScoreContext.Provider>
    </StyledLayout>
  );
};

export default Layout;
