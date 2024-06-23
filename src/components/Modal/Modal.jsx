import Modal from 'react-modal';
import css from './Modal.module.css';
import Icon from '../../components/Icon/Icon';


Modal.setAppElement('#root');

export const BasicModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      overlayClassName={css.overlay}
    >
      <button type="button" className={css.close} onClick={() => onClose()}>
        <Icon width="28" height="28" iconName="close" styles="icon-close" />
      </button>

      {children}
    </Modal>
  );
};


