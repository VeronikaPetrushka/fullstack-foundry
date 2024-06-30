import Modal from 'react-modal';
import css from './BasicModal.module.css';
import PropTypes from 'prop-types';



Modal.setAppElement('#root');

export const BasicModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      overlayClassName={css.overlay}
    >

      {children}
    </Modal>
  );
};

BasicModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
