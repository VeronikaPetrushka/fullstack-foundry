import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import css from './UserSettingsForm.module.css';

import icons from '../assets/logo.svg';

import { useDispatch } from 'react-redux';
//import { addContact } from '../../redux/contactsSlice';

const initialValues = {
  username: '',
  email: '',
  number: '',
  file: '',
};

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required!'),
    email: yup.string().email('Must be a valid email!').required('Required'),
    number: yup.number().positive().integer().required(),
    file: yup.mixed().required('Required'),
  })
  .required();

export default function UserSettingsForm() {
  //const dispatch = useDispatch();

  const {
    register = { initialValues },
    handleSubmit,
    formState: { errors },
  } = useForm(schema);
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input type="file" {...register('file', { required: true })} />
        </label>
        <button type="submit">
          <img src={icons.upload} alt="upload" />
          Upload a photo
        </button>
      </div>

      <div>
        <h2>Your gender identity</h2>
        <label>
          <input type="radio" value="Woman" {...register('option')} />
          Woman
        </label>
        <label>
          <input type="radio" value="Man" {...register('option')} />
          Man
        </label>
        {errors.option && <p>{errors.option.message}</p>}
      </div>

      <div>
        <label>
          <h2>Your name</h2>
          <input type="text" placeholder="Nadia" {...register('username')} />
        </label>

        <label>
          <h2>Email</h2>
          <input
            type="email"
            placeholder="nadia10@gmail.com"
            {...register('email')}
          />
        </label>
        {errors.option && <p>{errors.option.message}</p>}
      </div>

      <div>
        <h2>My daily norma</h2>
        <p>
          For woman:
          <span>V=(M*0,03) + (T*0,4)</span>
        </p>

        <p>
          For man:
          <span>V=(M*0,04) + (T*0,6)</span>
        </p>

        <p>
          <span>*</span> V is the volume of the water norm in liters per day, M
          is your body weight, T is the time of active sports, or another type
          of activity commensurate in terms of loads (in the absence of these,
          you must set 0)
        </p>

        <p>
          <span>!</span>
          Active time in hours
        </p>
      </div>

      <div>
        <label>
          Your weight in kilograms:
          <input type="number" placeholder="0" {...register('number')} />
        </label>

        <label>
          The time of active participation in sports:
          <input type="number" placeholder="0" {...register('number')} />
        </label>
      </div>

      <div>
        <p>
          The required amount of water in liters per day:
          <span>1.8 L</span>
        </p>
        <label>
          <h2>Write down how much water you will drink:</h2>
          <input type="number" placeholder="1.8" {...register('number')} />
        </label>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
