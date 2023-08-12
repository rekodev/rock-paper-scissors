import { Box, IconButton, Modal, Typography } from '@mui/material';
import styled from 'styled-components';
import { breakpoints, colorsNeutral } from '../../styles/Theme';

interface IStyledImageProps {
  $loaded: boolean;
}

export const StyledModal = styled(Modal)`
  background-color: #fff;
`;

export const StyledBox = styled(Box)`
  && {
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }

    @media screen and (min-width: ${breakpoints.medium}) {
      width: 400px;
      height: 550px;

      img {
        width: 100%;
      }
    }
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    bottom: 6rem;
    align-self: absolute;
    color: ${colorsNeutral.headerOutline};

    svg {
      height: 35px;
      width: 35px;
    }

    @media screen and (min-width: ${breakpoints.medium}) {
      align-self: flex-end;
      bottom: initial;
      top: 1rem;
      right: 1rem;
    }
  }
`;

export const StyledImage = styled.img<IStyledImageProps>`
  display: ${(props) => (props.$loaded ? 'initial' : 'none')};
`;

export const StyledTypography = styled(Typography)`
  && {
    position: absolute;
    align-self: center;
    top: 6rem;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-weight: 600;
    color: ${colorsNeutral.darkText};

    @media screen and (min-width: ${breakpoints.medium}) {
      left: 1.5rem;
      top: 1.5rem;
    }
  }
`;
