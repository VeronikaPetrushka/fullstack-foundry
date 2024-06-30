import css from './SignUpForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../redux/auth/operations';
import icon from '../../assets/icons.svg';
import { toast, Toaster } from 'react-hot-toast';
import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';


const SignUpForm = () => {
  const dispatch = useDispatch();
  const [inputTypePassword, setTypePassword] = useState('password');
  const [inputTypeRePassword, setTypeRePassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('eye-off');
  const [iconRePassword, setIconRePassword] = useState('eye-off');

  const { t } = useTranslation();
  const schema = yup.object().shape({
    email: yup.string().email(t('invalidEmail')).required(t('emailIsRequired')),
    password: yup
      .string()
      .min(8, t('notValidPassword'))
      .required(t('passwordRequired')),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('passwordNotMatch'))
      .required(t('repeatPasswordRequired')),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async formData => {
    try {
      await dispatch(signup(formData)).unwrap();
      toast.success('Successfully registered!');
      reset();
      navigate('/signin');
    } catch (error) {
      toast.error(error || 'Failed to sign up');
    }
  };

  const toggleShowPassword = () => {
    setTypePassword(prevType =>
      prevType === 'password' ? 'text' : 'password'
    );
    setIconPassword(prevIcon => (prevIcon === 'eye-off' ? 'eye' : 'eye-off'));
  };

  const toggleShowRePassword = () => {
    setTypeRePassword(prevType =>
      prevType === 'password' ? 'text' : 'password'
    );
    setIconRePassword(prevIcon => (prevIcon === 'eye-off' ? 'eye' : 'eye-off'));
  };

  return (
    <div className={css.signUpWrap}>
      <LangSwitch />
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>{t('signupTitle')}</h2>
        <label className={css.label}>{t('email')}</label>
        <input
          className={`${css.input} ${errors.email ? css.inputError : ''}`}
          {...register('email')}
          placeholder={t('enterYourEmail')}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}

        <label className={css.label}>{t('password')}</label>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${errors.password ? css.inputError : ''}`}
            {...register('password')}
            type={inputTypePassword}
            placeholder={t('enterYourPassword')}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className={css.iconButton}
          >
            {iconPassword === 'eye' ? (
              <svg className={css.icon}>
                <use href={`${icon}#eye`} />
              </svg>
            ) : (
              <svg className={css.icon}>
                <use href={`${icon}#eye-off`} />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className={css.errorMessage}>{errors.password.message}</p>
        )}

        <label className={css.label}>{t('repeatPassword')}</label>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${
              errors.repeatPassword ? css.inputError : ''
            }`}
            {...register('repeatPassword')}
            type={inputTypeRePassword}
            placeholder={t('repeatPasswordLabel')}
          />
          <button
            type="button"
            onClick={toggleShowRePassword}
            className={css.iconButton}
          >
            {iconRePassword === 'eye' ? (
              <svg className={css.icon}>
                <use href={`${icon}#eye`} />
              </svg>
            ) : (
              <svg className={css.icon}>
                <use href={`${icon}#eye-off`} />
              </svg>
            )}
          </button>
        </div>
        {errors.repeatPassword && (
          <p className={css.errorMessage}>{errors.repeatPassword.message}</p>
        )}

        <button className={css.signUpButton} type="submit">
          {t('signupBtn')}
        </button>
      </form>
      <p className={css.text}>
        {t('alreadyHaveAccount')}
        <Link to="/signin">
          <span className={css.spanLink}>{t('signinBtn')}</span>
        </Link>
      </p>
      <div className={css.line}></div>
      <div className={css.loginWithGoogleBtnContainer}>
        <a
          className={css.loginWithGoogleBtn}
          href="https://aquatrack-api-myzh.onrender.com/api/auth/google"
        >
          {t('signupWithGoogleBtn')}
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
