import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;

  main {
    flex: 1;
    display: flex;
    /* position: relative; */
  }
`;
