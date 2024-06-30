import { Controller } from 'react-hook-form';
import css from './AvatarInput.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../redux/user/selectors';
import Icon from '../../Icon/Icon'

export default function AvatarInput({ control, register, setMyAvatar }) {
  const [inputImg, setInputImage] = useState(false);
  const user = useSelector(selectUserInfo);

  const avatarUser = (
    <img
      className={css.photo}
      src={inputImg ? inputImg : user.avatarURL}
      width="100%"
      height="100%"
      alt="Avatar"
    />
  );

  const avatarDefault = (
    <img
      className={css.photo}
      src="src\assets\img\avatar-default.jpg"
      width="100%"
      height="100%"
      alt="Avatar"
    />
  );

  const onChange = event => {
    const file = event.target.files[0];
    if (file) {
      setMyAvatar(file);
      setInputImage(URL.createObjectURL(file));
    } else {
      setInputImage(false);
    }
  };

  return (
    <div className={css.avatarInput}>
      <div className={css.avatarBox}>
        {user.avatarURL || inputImg ? avatarUser : avatarDefault}
      </div>

      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...register('avatar')}
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={onChange}
          />
        )}
      />
      <label htmlFor="file-input">
        <div className={css.upLoad}>
          <Icon width={'16'} height={'16'} iconName={'upload'} styles={css.svgAvatarBtn} />
          <p>Upload a photo</p>
        </div>
      </label>
    </div>
  );
}
