import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

Modal.setAppElement('#root');

// modal styles
const customStyles = {
  content: {
    right: '50%',
    left: '',
    transform: 'translateX(50%)',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: '#000000b9',
  },
};

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img className={css.modal_img} src={image} />
    </Modal>
  );
};

export default ImageModal;
