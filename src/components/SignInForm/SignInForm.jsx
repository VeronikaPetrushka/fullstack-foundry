import css from './SignInForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async formData => {
    dispatch(login(formData));
    reset();
  };

  return (
    <div className={css.signUpWrap}>
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

        <label className={css.label}>Password</label>
        <input
          className={`${css.input} ${errors.password ? css.inputError : ''}`}
          {...register('password')}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className={css.errorMessage}>{errors.password.message}</p>
        )}

        <button className={css.button} type="submit">
          Sign In
        </button>
      </form>
      <p className={css.text}>
        Don’t have an account?{' '}
        <Link to="/signup">
          <span className={css.spanLink}>Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
