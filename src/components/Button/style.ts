import Button from '@mui/material/Button';
import styled from 'styled-components';
import { breakpoints, colorsNeutral } from '../../styles/Theme';

interface IStyledButtonProps {
  $size?: 'sm' | 'md' | 'lg';
}

export const StyledButton = styled(Button)<IStyledButtonProps>`
  && {
    font-weight: 500;
    color: ${(props) =>
      props.variant === 'outlined'
        ? '#fafafa'
        : props.variant === 'contained'
        ? 'hsl(237, 49%, 15%)'
        : 'initial'};
    border-color: ${(props) =>
      props.variant === 'outlined'
        ? '#fafafa'
        : props.variant === 'contained'
        ? 'transparent'
        : 'initial'};
    font-family: 'Barlow Semi Condensed', sans-serif;
    letter-spacing: 0.15rem;
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: ${(props) =>
      props.variant === 'outlined'
        ? 'transparent'
        : props.variant === 'contained'
        ? '#fafafa'
        : 'initial'};

    &:hover {
      color: ${(props) =>
        props.variant === 'contained' ? `${colorsNeutral.darkText}` : '#bbb'};
      border-color: #bbb;

      background-color: ${(props) =>
        props.variant === 'contained' ? 'gray' : 'initial'};
    }
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    && {
      position: ${(props) =>
        props.variant === 'outlined' ? 'absolute' : 'initial'};
      right: 2rem;
      bottom: 2rem;

      font-size: ${(props) =>
        props.variant === 'contained' ? '1.25rem' : '1rem'};
    }
  }
`;
