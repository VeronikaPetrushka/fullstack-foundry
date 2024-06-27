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

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const [inputTypePassword, setTypePassword] = useState('password');
  const [iconPassword, setIconPassword] = useState('eye-off');

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
      toast.success('Successfully signed in!');
      reset();
      navigate('/tracker');
    } catch (error) {
      toast.error(error || 'Failed to sign in. Please try again later.');
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
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>Sign In</h2>
        <label className={css.label}>Email</label>
        <input
          className={`${css.input} ${errors.email ? css.inputError : ''}`}
          {...register('email')}
          placeholder="Enter your email"
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
          <label className={css.label}>Password</label>
          <div className={css.inputWrapper}>
            <input
              className={`${css.input} ${
                errors.password ? css.inputError : ''
              }`}
              {...register('password')}
              type={inputTypePassword}
              placeholder="Enter your password"
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
                Forgot password?
              </span>
            </Link>
          </p>
        </div>
      </form>
      <button className={css.button} type="submit">
        Sign In
      </button>

      <p className={css.text}>
        Don’t have an account?{' '}
        <Link to="/signup">
          <span className={css.spanLink}>Sign Up</span>
        </Link>
      </p>
      <div className={css.line}></div>
      <div className={css.loginWithGoogleBtnContainer}>
        <a
          className={css.loginWithGoogleBtn}
          href="https://aquatrack-api-myzh.onrender.com/api/auth/google"
        >
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
