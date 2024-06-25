import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>AQUATRACK: Sign in to your account</title>
      </Helmet>
      <Page>
        <title>Sign In Page</title>
        <SignInForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default SignInPage;
