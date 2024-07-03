import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';
import { userInfo } from '../redux/user/operations';
import { selectUserInfo } from '../redux/user/selectors';
import { tokenRefresh } from '../redux/auth/operations';
import { useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const useRefreshUser = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isGoogle, setIsGoogle] = useState(false);
  const gToken = searchParams.get('token');

  if(gToken) {
    const decoded = jwtDecode(gToken);
    const current = new Date();
    if (decoded.exp * 1000 > current.getTime()) {
      localStorage.setItem('token', gToken);
      setIsGoogle(true);
    }
  }

  const dispatch = useDispatch();
  let isSignedIn = useSelector(selectIsSignedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const dispatchRefreshToken = async () => {
      try{
        await dispatch(tokenRefresh()).unwrap();
        await dispatch(userInfo()).unwrap();
      } catch(err) {
        console.log(err);
      }
    }
    if(token) {
      dispatchRefreshToken();
    }
  }, [dispatch]);
  isSignedIn = useSelector(selectIsSignedIn);
  useSelector(selectUserInfo);

  if(isGoogle) {
    navigate('/signin');
  }

  return [isSignedIn];

}
