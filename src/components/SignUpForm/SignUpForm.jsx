import css from './SignUpForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat Password is required'),
});

const SignUpForm = () => {
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
    dispatch(register(formData));
    reset();
  };

  return (
    <div className={css.signUpWrap}>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <h2 className={css.formTitle}>Sign Up</h2>
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

        <label className={css.label}>Repeat password</label>
        <input
          className={`${css.input} ${
            errors.repeatPassword ? css.inputError : ''
          }`}
          {...register('repeatPassword')}
          type="password"
          placeholder="Repeat password"
        />
        {errors.repeatPassword && (
          <p className={css.errorMessage}>{errors.repeatPassword.message}</p>
        )}

        <button className={css.button} type="submit">
          Sign Up
        </button>
      </form>
      <p className={css.text}>
        Already have an account?{' '}
        <Link to="/signin">
          <span className={css.spanLink}>Sign In</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
