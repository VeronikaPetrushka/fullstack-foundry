import Modal from 'react-modal';
import PropTypes from 'prop-types';
import WaterForm from '../WaterForm/WaterForm';
import styles from './WaterModal.module.css';
import { useState, useEffect } from 'react';

const WaterModal = ({ isOpen, onClose, initialData, onSubmit, type }) => {
  const [backendError, setBackendError] = useState('');

  const handleSubmit = async (data) => {
    try {
      await onSubmit(data);
      setBackendError(''); // Очищення помилки після успішного запиту
      onClose();
    } catch (error) {
      setBackendError(error.message || 'An error occurred');
    }
  };

  const handleCloseError = () => {
    setBackendError('');
  };

  useEffect(() => {
    if (!isOpen) {
      setBackendError(''); // Очищення помилки при закритті модального вікна
    }
  }, [isOpen]);

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onClose} 
        ariaHideApp={false} 
        className={styles.waterModal}
      >
        <div className={styles.modalContent}>
          <WaterForm initialData={initialData} onSubmit={handleSubmit} onClose={onClose} type={type} />
        </div>
      </Modal>
      
      <Modal 
        isOpen={!!backendError} 
        onRequestClose={handleCloseError} 
        ariaHideApp={false} 
        className={styles.errorModal}
      >
        <button className={styles.closeBtn} onClick={handleCloseError}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.errorModalContent}>
          <p className={styles.errorText}>{backendError}</p>
        </div>
      </Modal>
    </>
  );
};

WaterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    amount: PropTypes.number,
    time: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterModal;
