import { StyledButton } from './style';

interface IButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  text: string;
  onClick: (arg?: any) => any | void;
}

const Button = ({ variant, text, onClick }: IButtonProps) => {
  return (
    <StyledButton $size='sm' variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
