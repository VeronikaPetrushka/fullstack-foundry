/* eslint-disable react/prop-types */
import { useState } from 'react';
import s from './WaterForm.module.css';

const WaterForm = ({ isOpen, onClose, onSave }) => {
  const [amount, setAmount] = useState(50);
  const [time, setTime] = useState(Date.now());
  const [value, setValue] = useState(50);

//   const handleAmountChange = e => {
//     setAmount(Number(e.target.value));
//     setValue(Number(e.target.value));
//   };

  const handleValueChange = e => {
    setValue(Number(e.target.value));
  };

  const handleSave = () => {
    onSave(amount, time);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>
          x
        </button>
        <h2 className={s.modalHeader}>Edit the entered amount of water</h2>
        <div>
          <label className={s.waterAmountHeader}>Correct entered data:</label>
          <div className={s.amountSelector}>
            <p className={s.amountofwater}>Amount of water</p>
            <button onClick={() => setAmount(amount - 50)}>-</button>
            <span>{amount} ml</span>
            <button onClick={() => setAmount(amount + 50)}>+</button>
          </div>
          <div>
            <label>Recording time:</label>
            <input
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
          </div>
          <div>
            <label>Enter the value of the water used:</label>
            <input type="number" value={value} onChange={handleValueChange} />
          </div>
          <button className={s.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default WaterForm;
