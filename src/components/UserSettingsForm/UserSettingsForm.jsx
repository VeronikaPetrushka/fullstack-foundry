import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import css from './UserSettingsForm.module.css';

import icons from '../assets/logo.svg';

import { useDispatch } from 'react-redux';
//import { addContact } from '../../redux/contactsSlice';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function UserSettingsForm() {
  //const dispatch = useDispatch();

  const {
    register,
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
        {errors.option && <p>{errors.option.message}</p>}
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
          <input type="text" {...register('name')} />
        </label>

        <label>
          <h2>Email</h2>
          <input type="email" {...register('email')} />
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

      <input {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} />
      <p>{errors.age?.message}</p>

      <button type="submit">Save</button>
    </form>
  );
}
