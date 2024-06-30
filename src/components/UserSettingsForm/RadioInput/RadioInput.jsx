import css from './RadioInput.module.css';

export default function RadioBtn({ register, onChangeRadio, selectedValue }) {
  return (
    <>
      <div className={css.container}>
        <div className={css.radio}>
          <input
            {...register('gender')}
            type="radio"
            value="female"
            id="field-woman"
            defaultChecked={selectedValue === 'female'}
            onChange={onChangeRadio}
          />
          <label htmlFor="field-woman" className={css.radioLabel}>
            Woman
          </label>
        </div>

        <div className={css.radio}>
          <input
            {...register('gender')}
            type="radio"
            value="male"
            id="field-man"
            defaultChecked={selectedValue === 'male'}
            onChange={onChangeRadio}
          />
          <label htmlFor="field-man" className={css.radioLabel}>
            Man
          </label>
        </div>
      </div>
    </>
  );
}
