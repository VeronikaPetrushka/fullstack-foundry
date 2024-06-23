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
    <div className={css.signUpForm}>
      <h2 className={css.formTitle}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label}>Email</label>
        <input
          className={css.input}
          {...register('email')}
          placeholder="Enter your email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label className={css.label}>Password</label>
        <input
          className={css.input}
          {...register('password')}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label className={css.label}>Repeat password</label>
        <input
          className={css.input}
          {...register('repeatPassword')}
          type="password"
          placeholder="Repeat password"
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

        <button className={css.button} type="submit">
          Sign Up
        </button>
      </form>
      <p className={css.text}>
        Already have account?{' '}
        <Link to="/signin">
          <span className={css.spanLink}>Sign In</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
