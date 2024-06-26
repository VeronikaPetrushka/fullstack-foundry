import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';
import { tokenRefresh } from '../redux/auth/operations';

export const useRefreshUser = () => {

  const dispatch = useDispatch();
  let isSignedIn = useSelector(selectIsSignedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(tokenRefresh());
    }
  }, [dispatch]);
  isSignedIn = useSelector(selectIsSignedIn);

  return [isSignedIn];

}
