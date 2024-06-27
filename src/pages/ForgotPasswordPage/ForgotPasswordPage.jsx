import css from './ForgotPasswordPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>AQUATRACK: Forgot your password?</title>
      </Helmet>
      <Page>
        <ForgotPassword />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default SignInPage;
