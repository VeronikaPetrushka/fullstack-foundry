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
      <h1>Setting</h1>
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

      <input {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} />
      <p>{errors.age?.message}</p>

      <button type="submit">Save</button>
    </form>
  );
}
