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

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [sendResult, setSendResult] = useState(null);

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
      setSendResult('Check your email! We sent you a link to reset your password.');
      reset();
    } catch (error) {
      toast.error(error || 'Failed to send email. Please try again later.');
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      navigate('/tracker');
    }
  }, [isSignedIn, navigate]);

  return (sendResult ?
    <div className={css.signUpWrap}>
      <h2 className={css.formTitle}>Forgot your password?</h2>
      <p className={css.errorInfo}>{sendResult}</p>
    </div>
     :
    <div className={css.signUpWrap}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>Forgot your password?</h2>
        <label className={css.label}>Email</label>
        <input
          className={`${css.input} ${errors.email ? css.inputError : ''}`}
          {...register('email')}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className={css.errorMessage}>{errors.email.message}</p>
        )}

        <button className={css.button} type="submit">
          Send
        </button>
      </form>
      <p className={css.text}>
        Don’t have an account?{' '}
        <Link to="/signup">
          <span className={css.spanLink}>Sign Up</span>
        </Link>
      </p>
      <p className={css.text}>
        Already registered?{' '}
        <Link to="/signin">
          <span className={css.spanLink}>Sign In</span>
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
