import css from './SignUpPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Page from '../../components/Page/Page';
import { Helmet } from 'react-helmet-async';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>AQUATRACK: Create your account</title>
      </Helmet>
      <Page>
        <SignUpForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default SignUpPage;
