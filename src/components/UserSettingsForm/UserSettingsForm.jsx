import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, Toaster } from 'react-hot-toast';
import TimeField from 'react-simple-timefield';
import { settingsSchema } from './settingsSchema';
import css from './UserSettingsForm.module.css';
import RadioBtn from './RadioInput/RadioInput';
import AvatarInput from './AvatarInput/AvatarInput';
import { updateUserSettings } from '../../redux/user/operations';

export default function UserSettingsForm({ closeModal, getSetting }) {
  const [selectedValueRadio, setSelectedValueRadio] = useState('');
  const [result, setResult] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedVolume, setSelectedVolume] = useState('');
  const [M, setM] = useState(null);
  const [T, setT] = useState('7:00');

  const {
    avatarURL,
    dailyActivityTime,
    dailyWaterNorm,
    email,
    gender,
    name,
    weight,
  } = getSetting;

  const dispatch = useDispatch();

  const handleRadioChange = event => {
    setSelectedValueRadio(event.target.value);
  };

  const handleChange = (setSelected, event) => {
    setSelected(event.target.value);
  };

  const convertToMinutes = time => {
    const [hours, minutes] = time.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    return totalMinutes;
  };

  useEffect(() => {
    const time = convertToMinutes(T);
    if (selectedValueRadio === 'female') {
      const V = (M * 0.03 + time * 0.4) / 100;
      setResult(V.toFixed(2));
    } else {
      const V = ((M * 0.04 + time * 0.6) / 100).toFixed(2);
      setResult(V);
    }
  }, [selectedValueRadio, M, T]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(settingsSchema),
    defaultValues: {
      lastEmail: email,
    },
  });

 const onSubmit = async (data) => {
  try {
    const { gender, lastEmail, lastKilo, lastName, lastTime, lastVolume } = data;

    const formData = new FormData();
    formData.append('gender', gender);
    formData.append('name', lastName);
    formData.append('email', lastEmail);
    formData.append('weight', lastKilo);
    formData.append('timeActivity', lastTime);
    formData.append('dailyNorma', lastVolume * 1000);

    await dispatch(updateUserSettings(formData)).unwrap();

    closeModal();

    toast.success('Your settings have been successfully updated and saved!');
  } catch (error) {
    if (error) {
      toast.error('Oops... Something went wrong. Please try again later!');
      console.error(error);
    }
  }
};

  return (
    <>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <AvatarInput
          control={control}
          register={register}
          setMyAvatar={avatarURL}
        />
        <div>
          <h3 className={css.titleHeader}>Your gender identity</h3>
        </div>
        <RadioBtn
          onChangeRadio={handleRadioChange}
          selectedValue={gender}
          register={register}
        />
        <div className={css.sectionBox}>
          <section>
            <div className={css.box}>
              <label className={css.labelName}>Your name</label>
              <input {...register('lastName', { value: name })} />
              {errors.lastName && (
                <p className={css.error}>{errors.lastName.message}</p>
              )}
            </div>
            <div className={css.box}>
              <label className={css.labelName}>Email</label>
              <input
                {...register('lastEmail', { value: email }, { required: true })}
              />
              {errors.lastEmail && (
                <p className={css.error}>{errors.lastEmail.message} </p>
              )}
            </div>
            <h2 className={css.titleNormaFormula}>My daily norma</h2>
            <ul className={css.listFormula}>
              <li>
                <p>For woman:</p>
                <span style={{ color: '#9be1a0' }}>V=(M*0.03) + (T*0.4)</span>
              </li>
              <li>
                <p>For man:</p>
                <span style={{ color: '#9be1a0' }}>V=(M*0.04) + (T*0.6)</span>
              </li>
              <li>
                <div className={css.textBox}>
                  <p>
                    <span>*</span> V is the volume of the water norm in liters
                    per day, M is your body weight, T is the time of active
                    sports, or another type of activity commensurate in terms of
                    loads (in the absence of these, you must set 0)
                  </p>
                </div>
              </li>
              <li className={css.vectorItem}>
                <p>
                  <span className={css.vector}>!</span>Active time in hours
                </p>
                <p>
                  <span className={css.vector}>!</span>Daily water norma in litres
                </p>
              </li>
            </ul>
          </section>
          <section>
            <div className={css.formKilo}>
              <label>Your weight in kilograms:</label>
              <input
                {...register('lastKilo', { value: weight })}
                onChange={event => handleChange(setM, event)}
              />
              {errors.lastKilo && (
                <p className={css.error}>{errors.lastKilo.message} </p>
              )}
            </div>
            <div className={css.formKilo}>
              <label>The time of active participation in sports:</label>
              <TimeField
                value={dailyActivityTime}
                onChange={event => handleChange(setT, event)}
                input={<input {...register('lastTime', { required: true })} />}
              />
            </div>
            <p className={css.amountWater}>
              The required amount of water in liters per day:
              <span className={css.amount}>{result} L</span>
            </p>
            <div className={css.youWater}>
              <label>Write down how much water you will drink:</label>
              <input
                {...register('lastVolume', { value: dailyWaterNorm })}
                onChange={event => handleChange(setSelectedVolume, event)}
              />
              {errors.lastVolume && (
                <p className={css.error}>{errors.lastVolume.message} </p>
              )}
            </div>
          </section>
        </div>
        <div className={css.spBtn}>
          <button className={css.btnSave} type="submit">
            <span>Save</span>
          </button>
        </div>
      </form>
    </>
  );
}


