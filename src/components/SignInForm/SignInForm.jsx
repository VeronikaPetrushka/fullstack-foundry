import { useEffect, useState } from 'react';
import css from './SignInForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import icon from '../../assets/icons.svg';
import { toast, Toaster } from 'react-hot-toast';
import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [inputTypePassword, setTypePassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('eye-off');

  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup.string().email(t('invalidEmail')).required(t('emailIsRequired')),
    password: yup
      .string()
      .min(8, t('notValidPassword'))
      .required(t('passwordRequired')),
  });

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
      await dispatch(login(formData)).unwrap();
      toast.success(t('signedin'));
      reset();
      navigate('/tracker');
    } catch (error) {
      toast.error(error || t('failedSign'));
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate('/tracker');
    }
  }, [isSignedIn, navigate]);

  const toggleShowPassword = () => {
    setTypePassword(prevType =>
      prevType === 'password' ? 'text' : 'password'
    );
    setIconPassword(prevIcon => (prevIcon === 'eye-off' ? 'eye' : 'eye-off'));
  };

  return (
    <div className={css.signUpWrap}>
      <LangSwitch />
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>{t('signInTitle')}</h2>
        <label className={css.label}>{t('email')}</label>
        <input
          className={`${css.input} ${errors.email ? css.inputError : ''}`}
          {...register('email')}
          placeholder={t('enterYourEmail')}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}

        <div
          style={{
            marginBottom: 25,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <label className={css.label}>{t('password')}</label>
          <div className={css.inputWrapper}>
            <input
              className={`${css.input} ${
                errors.password ? css.inputError : ''
              }`}
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

          <p className={css.text}>
            <Link to="/forgot-password">
              <span className={css.spanLink} style={{ fontSize: 14 }}>
                {t('forgotPassword')}
              </span>
            </Link>
          </p>
        </div>

        <button className={css.signInButton} type="submit">
          {t('signinBtn')}
        </button>
      </form>
      <p className={css.text}>
        {t('dontHaveAccount')}
        <Link to="/signup">
          <span className={css.spanLink}>{t('signUpLink')}</span>
        </Link>
      </p>
      <div className={css.line}></div>
      <div className={css.loginWithGoogleBtnContainer}>
        <a
          className={css.loginWithGoogleBtn}
          href="https://aquatrack-api-myzh.onrender.com/api/auth/google"
        >
          {t('loginWithGoogle')}
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
