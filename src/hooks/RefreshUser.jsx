import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';
import { tokenRefresh } from '../redux/auth/operations';
import { useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const useRefreshUser = () => {

  const [searchParams] = useSearchParams();
  const gToken = searchParams.get('token');

  if(gToken) {
    const decoded = jwtDecode(gToken);
    const current = new Date();
    if (decoded.exp * 1000 > current.getTime()) {
      localStorage.setItem('token', gToken);
    }
  }

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
