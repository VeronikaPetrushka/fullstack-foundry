import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? Component : <Navigate to={redirectTo} />;
};