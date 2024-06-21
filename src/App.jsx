import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import { PrivateRoute } from './components/PrivateRoute';
// import { RestrictedRoute } from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

const App = () => {

  return (
    <SharedLayout>
       <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/tracker" component={<SignInPage />} />
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
          }
        /> */}
       </Routes>
    </SharedLayout>
  );
};

export default App;
