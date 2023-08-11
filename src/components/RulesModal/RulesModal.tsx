import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '@mui/material';
import { useState } from 'react';
import imageRules from '../../assets/images/image-rules-bonus.svg';
import {
  StyledBox,
  StyledIconButton,
  StyledImage,
  StyledTypography,
} from './style';

interface IRulesModalProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RulesModal = ({ isOpen, setIsOpen }: IRulesModalProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBox sx={style}>
          <StyledIconButton onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </StyledIconButton>
          <StyledTypography variant={'h4'}>RULES</StyledTypography>
          <StyledImage
            src={imageRules}
            alt='Game Rules'
            onLoad={() => setImageLoaded(true)}
            $loaded={imageLoaded}
          />
        </StyledBox>
      </Modal>
    )
  );
};

export default RulesModal;
