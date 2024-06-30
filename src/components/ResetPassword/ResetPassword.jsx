import css from './ResetPassword.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { resetPassword } from '../../redux/auth/operations';
import icon from '../../assets/icons.svg';
import { toast, Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [inputTypePassword, setTypePassword] = useState('password');
  const [inputTypeRePassword, setTypeRePassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('eye-off');
  const [iconRePassword, setIconRePassword] = useState('eye-off');
  const [validToken, setValidToken] = useState(false);

  const { t } = useTranslation();

  const { token } = useParams();

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, t('notValidPassword'))
      .required(t('passwordRequired')),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('passwordNotMatch'))
      .required(t('repeatPasswordRequired')),
  });

  useEffect(() => {
    if(token){
      const decoded = jwtDecode(token);
      const current = new Date();
      if (decoded.exp * 1000 < current.getTime()) {
        setValidToken(false);
      } else {
        setValidToken(true);
      }
    }
  }, [token]);

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
      await dispatch(resetPassword(formData)).unwrap();
      toast.success(t('passwordChanged'));
      reset();
      navigate('/signin');
    } catch (error) {
      toast.error(error || t('failedReset'));
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

  return (!validToken ?
    <div className={css.signUpWrap}>
      <div className={css.form}>
        <h2 className={css.formTitle}>{t('changePassword')}</h2>
        <p className={css.errorInfo}>{t('linkExpired')}</p>
        <p className={css.errorInfo}>{t('goToThePage')} <Link to='/forgot-password'>{t('forgotPassLink')}</Link></p>
      </div>
    </div>
   :
    (
    <div className={css.signUpWrap}>
      <LangSwitch />
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>{t('changePassword')}</h2>
        <input type='hidden' name='resetToken' id='resetToken' value={token} {...register('resetToken')} />

        <label className={css.label}>{t('password')}</label>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${errors.password ? css.inputError : ''}`}
            {...register('password')}
            type={inputTypePassword}
            placeholder={t('enterYourPassword')}
            autoComplete='off'
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

        <label className={css.label}>{t('repeatPasswordLabel')}</label>
        <div className={css.inputWrapper}>
          <input
            className={`${css.input} ${
              errors.repeatPassword ? css.inputError : ''
            }`}
            {...register('repeatPassword')}
            type={inputTypeRePassword}
            placeholder={t('repeatPassword')}
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

        <button className={css.button} type="submit">
          {t('resetPassBtn')}
        </button>
      </form>
      <p className={css.text}>
        {t('alreadyHaveAccount')}
        <Link to="/signin">
          <span className={css.spanLink}>{t('signInLink')}</span>
        </Link>
      </p>
    </div>)
  );
};

export default ResetPassword;
