import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TimeField from 'react-simple-timefield';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/user/selectors';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Введіть коректний email')
    .required("Це поле обов'язкове"),
  name: yup.string(),
  gender: yup.string().oneOf(['male', 'female'], 'Виберіть стать'),
  weight: yup.number(),
  timeActivity: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Введіть час у форматі "HH:MM"'),
  // Додайте інші поля та правила валідації
});

const UserProfileForm = () => {
  const user = useSelector(selectUserInfo);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [v, setV] = useState(null);

  const onSubmit = data => {
    // Отримані дані можна відправити на сервер або обробити локально
    console.log(data);
  };

  const calculateV = () => {
    const { gender, weight, timeActivity } = watch();
    if (gender === 'male') {
      const vMale = weight * 0.04 + parseFloat(timeActivity) * 0.6;
      setV(vMale);
    } else if (gender === 'female') {
      const vFemale = weight * 0.03 + parseFloat(timeActivity) * 0.4;
      setV(vFemale);
    }
  };

  // Встановлюємо початкові дані для полів
  Object.keys(user).forEach(field => {
    register(field);
    // setValue(field, user[field]);
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name')} />
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" {...register('gender')} value="male" /> Male
        <input type="radio" {...register('gender')} value="female" /> Female
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
      <div>
        <label>Weight:</label>
        <input type="number" {...register('weight')} />
      </div>
      <div>
        <label>Time Activity:</label>
        <TimeField
          value={watch('timeActivity')}
          onChange={value => {
            setValue('timeActivity', value);
            calculateV();
          }}
          input={<input type="text" />}
        />
        {errors.timeActivity && <p>{errors.timeActivity.message}</p>}
      </div>
      <div>
        <label>Daily Norma:</label>
        <input
          type="number"
          {...register('dailyNorma')}
          value={v || ''}
          readOnly
        />
      </div>
      {/* Додайте інші поля */}
      <button type="submit">Зберегти</button>
    </form>
  );
};

export default UserProfileForm;
