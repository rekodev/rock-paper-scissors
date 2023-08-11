import { useEffect, useState } from 'react';
import { StyledCountdown, StyledTypography } from './style';

const Countdown = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const x = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(x);
  }, [count]);

  return (
    <StyledCountdown>
      <StyledTypography>{count}</StyledTypography>
    </StyledCountdown>
  );
};

export default Countdown;
