import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../redux/auth/selectors';


/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};
