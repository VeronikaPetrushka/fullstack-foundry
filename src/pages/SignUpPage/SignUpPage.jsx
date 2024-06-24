import css from './SignUpPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <Page>
        <title>Sign Up Page</title>
        <SignUpForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </Container>
  );
};

export default SignUpPage;
