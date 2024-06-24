import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';

const SignInPage = () => {
  return (
    <Container>
      <Page>
        <title>Sign In Page</title>
        <SignInForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </Container>
  );
};

export default SignInPage;
