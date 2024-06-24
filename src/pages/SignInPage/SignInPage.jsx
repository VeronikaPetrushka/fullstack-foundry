import SignInForm from '../../components/SignInForm/SignInForm';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';

const SignInPage = () => {
  return (
    <Container>
      <Page>
        <title>Sign In Page</title>
        <SignInForm />
      </Page>
    </Container>
  );
};

export default SignInPage;
