import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import Page from '../../components/Page/Page';

const SignInPage = () => {
  return (
      <Page>
        <title>Sign In Page</title>
        <SignInForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
  );
};

export default SignInPage;
