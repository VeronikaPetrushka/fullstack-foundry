import PropTypes from 'prop-types';
import styles from './WaterForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const WaterForm = ({ initialData, onSubmit, onClose, type }) => {
  const schema = Yup.object().shape({
    amount: Yup.number().required('Amount is required').min(50, 'Amount must be at least 50').max(1000, 'Amount must be no more than 1000'),
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
      
      console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Початкові дані`, initialData);
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
    if (currentAmount < 1000) {
      const newAmount = currentAmount + 50 > 1000 ? 1000 : currentAmount + 50;
      setValue('amount', newAmount);
      console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Збільшення кількості`, newAmount);
    }
  };

  const decrementAmount = () => {
    const currentAmount = getValues('amount');
    if (currentAmount > 50) {
      const newAmount = currentAmount - 50 < 50 ? 50 : currentAmount - 50;
      setValue('amount', newAmount);
      console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Зменшення кількості`, newAmount);
    }
  };

  const handleFormSubmit = (data) => {
    const date = new Date();
    const [hours, minutes] = data.time ? data.time.split(':') : [date.getHours(), date.getMinutes()];
    date.setHours(hours);
    date.setMinutes(minutes);

    const formattedDate = date.toISOString();
    const newData = { ...data, date: formattedDate }; // Використання правильного формату ISO 8601 для параметра date
    delete newData.time; // Видалення параметра time

    console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Клік на кнопку Submit`, newData);
    onSubmit(newData);
  };

  const handleFormClose = () => {
    console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Закриття форми`);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.popUp}>
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
                    onChange={(e) => {
                      field.onChange(e);
                      console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Зміна часу`, e.target.value);
                    }}
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
                min="50"
                max="1000"
                onChange={(e) => {
                  let value = parseInt(e.target.value);
                  if (value > 1000) value = 1000;
                  if (value < 50) value = 50;
                  field.onChange(value);
                  console.log(`[WaterForm] ${new Date().toLocaleTimeString()}: Зміна кількості`, value);
                }}
              />
            )}
          />
        </div>
        <button className={styles.btn} type="submit">
          <div className={styles.btnSave}>Save</div>
        </button>
      </div>
      <button type="button" className={styles.closeBtn} onClick={handleFormClose}>
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
    time: PropTypes.string, // Використовуємо time для отримання часу
  }),
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['add', 'edit']).isRequired,
};

export default WaterForm;
