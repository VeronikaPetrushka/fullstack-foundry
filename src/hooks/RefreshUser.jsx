import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';
import { tokenRefresh } from '../redux/auth/operations';


export const useRefreshUser = () => {

  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!isSignedIn && token) {
      dispatch(tokenRefresh());
    }
  });
  const isSignedInRefreshed = useSelector(selectIsSignedIn);

  return [isSignedInRefreshed];

}
