import css from './AvatarInput.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, selectIsLoadingAvatar, selectIsError } from '../../../redux/user/selectors';
import { useForm } from "react-hook-form";
import { uploadAvatar } from '../../../redux/user/operations';
import Icon from '../../Icon/Icon'
import Loader from '../../Loader/Loader';
import { toast } from 'react-hot-toast';

export default function AvatarInput() {
  const { register } = useForm();
  const [avatarURL, setAvatarURL] = useState('src/assets/img/avatar-default.jpg');

  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const isLoadingAvatar = useSelector(selectIsLoadingAvatar);
  const isErrorAvatar = useSelector(selectIsError);

  useEffect(() => {
    if (user.avatar) {
      setAvatarURL(user.avatar);
    }
  }, [user.avatar]);

  const handleUpload = async(file) => {
    const formData = new FormData();
    formData.append("avatar", file);
    const res = await dispatch(uploadAvatar(formData)).unwrap();
    return res;
  }
  const onChange = event => {
    const file = event.target.files[0];
    if (file) {
      const avatar = handleUpload(file);
      if(avatar && !isErrorAvatar && !isLoadingAvatar){
        setAvatarURL(avatar);
      }
    }
  };

  isErrorAvatar && toast.error(isErrorAvatar || 'Sorry, error occured! Try later...');

  return (
    <div className={css.avatarInput}>
      <div className={css.avatarBox}>
        {isLoadingAvatar ? <Loader /> :
        <img className={css.photo} src={avatarURL} width="100%" height="100%" alt="Avatar" />
        }
      </div>
      <form>
          <input
            {...register('avatar')}
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={onChange}
          />
      <label htmlFor="file-input">
        <div className={css.upLoad}>
          <Icon width={'16'} height={'16'}  iconName={'upload'} styles= {css.svgAvatarBtn}/>
          <p>Upload a photo</p>
        </div>
      </label>
      </form>
    </div>
  );
}
