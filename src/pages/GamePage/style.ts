import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

export const StyledGamePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 2rem;
  padding-bottom: 2rem;
  min-height: 450px;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    justify-content: center;
  }
`;
