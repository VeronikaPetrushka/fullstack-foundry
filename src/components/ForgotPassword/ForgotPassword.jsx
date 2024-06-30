import { useEffect, useState } from 'react';
import css from './ForgotPassword.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/auth/operations';
import { selectIsSignedIn } from '../../redux/auth/selectors';
import { toast, Toaster } from 'react-hot-toast';
import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [sendResult, setSendResult] = useState(null);

  const { t } = useTranslation();

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
      await dispatch(forgotPassword(formData)).unwrap();
      setSendResult(t('checkYourEmail'));
      reset();
    } catch (error) {
      toast.error(error || t('userNotExist'));
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate('/tracker');
    }
  }, [isSignedIn, navigate]);

  return (sendResult ?
    <div className={css.signUpWrap}>
      <h2 className={css.formTitle}>{t('forgotYourPassword')}</h2>
      <p className={css.errorInfo}>{sendResult}</p>
    </div>
     :
    <div className={css.signUpWrap}>
      <LangSwitch />
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>{t('forgotYourPassword')}</h2>
        <label className={css.label}>{t('email')}</label>
        <input
          className={`${css.input} ${errors.email ? css.inputError : ''}`}
          {...register('email')}
          placeholder={t('enterYourEmail')}
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}

        <button className={css.button} type="submit">
          Send
        </button>
      </form>
      <p className={css.text}>
        {t('dontHaveAccount')}
        <Link to="/signup">
          <span className={css.spanLink}>{t('signUpLink')}</span>
        </Link>
      </p>
      <p className={css.text}>
        {t('alreadyHaveAccount')}
        <Link to="/signin">
          <span className={css.spanLink}>{t('signInLink')}</span>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
