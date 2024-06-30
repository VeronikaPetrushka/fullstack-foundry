import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import styles from './WaterForm.module.css';
import { useEffect } from 'react';

const WaterForm = ({ initialData, onSubmit, onClose, type }) => {
  const schema = Yup.object().shape({
    amount: Yup.number().required('Amount is required').min(1, 'Amount must be at least 1'),
    time: Yup.string().required('Time is required').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:mm format'),
  });

  const { handleSubmit, control, formState: { errors }, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: initialData?.amount || 50,
      time: initialData?.time || '',
    }
  });

  useEffect(() => {
    if (initialData) {
      setValue('time', initialData.time || getCurrentTime());
      setValue('amount', initialData.amount || 50);
      
    }
  }, [initialData, setValue]);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const incrementAmount = () => {
    const currentAmount = getValues('amount');
    setValue('amount', currentAmount + 50);
    
  };

  const decrementAmount = () => {
    const currentAmount = getValues('amount');
    if (currentAmount > 50) {
      setValue('amount', currentAmount - 50);
      
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.popUp}>
      <div className={styles.header}>
        <div className={styles.headerText}>{type === 'add' ? 'Add water' : 'Edit the entered amount of water'}</div>
        <div className={styles.data}>
          <div className={styles.dataText}>{type === 'add' ? 'Choose a value' : 'Correct entered data'}:</div>
          <div className={styles.content}>
            <div className={styles.amount}>
              <div className={styles.labelText}>Amount of water:</div>
              <div className={styles.amountSection}>
                <button type="button" className={styles.minus} onClick={decrementAmount}>
                  <div className={styles.vector}></div>
                </button>
                <Controller
                  name="amount"
                  control={control}
                  render={({ field }) => (
                    <div className={styles.volume}>
                      {field.value} ml
                    </div>
                  )}
                />
                <button type="button" className={styles.plus} onClick={incrementAmount}>
                  <div className={styles.vector}></div>
                  <div className={styles.vector}></div>
                </button>
              </div>
              {errors.amount && <p className={styles.error}>{errors.amount.message}</p>}
            </div>
            <div className={styles.time}>
              <div className={styles.labelText}>Recording time:</div>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <input 
                    type="text" 
                    {...field}
                    className={styles.timeInput}
                    placeholder="HH:MM"
                    pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                    title="Time format HH:MM"
                  />
                )}
              />
              {errors.time && <p className={styles.error}>{errors.time.message}</p>}
            </div>
          </div>
        </div>
        <div className={styles.enter}>
          <div className={styles.dataText}>Enter the value of the water used:</div> 
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <input 
                type="number"
                {...field}
                className={styles.input}
                min="1"
                onChange={(e) => {
                  field.onChange(e);
                }}
              />
            )}
          />
        </div>
        <button className={styles.btn} type="submit">
          <div className={styles.btnSave}>Save</div>
        </button>
      </div>
      <button type="button" className={styles.closeBtn} onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>

  );
};

WaterForm.propTypes = {
  initialData: PropTypes.shape({
    amount: PropTypes.number,
    time: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterForm;
