import Modal from 'react-modal';
import PropTypes from 'prop-types';
import WaterForm from '../WaterForm/WaterForm';
import styles from './WaterModal.module.css';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectIsLoading } from '../../redux/water/selectors';

const WaterModal = ({ isOpen, onClose, initialData, onSubmit, type }) => {

  const [backendError, setBackendError] = useState('');

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = async data => {
    try {
      await onSubmit(data);
      setBackendError('');
      toast.success('The amount of water has been successfully added or updated');
      onClose();
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again');
      setBackendError(error.message || 'An error occurred');
    }
  };

  const handleCloseError = () => {
    setBackendError('');
  };

  useEffect(() => {
    if (!isOpen) {
      setBackendError('');
    }
  }, [isOpen, initialData]);

  return (
    <>
      {isLoading && (
        <div className={styles.loaderBg}>
          <Loader addClass={styles.monthDataLoader} />
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className={styles.waterModal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <WaterForm
            initialData={initialData}
            onSubmit={handleSubmit}
            onClose={onClose}
            type={type}
          />
        </div>
      </Modal>

      {backendError && (
        <Modal
          isOpen={!!backendError}
          onRequestClose={handleCloseError}
          ariaHideApp={false}
          className={styles.errorModal}
          overlayClassName={styles.noOverlay}
        >
          <button className={styles.closeBtn} onClick={handleCloseError}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#2F2F2F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#2F2F2F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Modal>
      )}
    </>
  );
};

WaterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    amount: PropTypes.number,
    date: PropTypes.string, // Використовуємо date для отримання часу
  }),
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterModal;
