import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <Page>
        <title>Sign Up Page</title>
        <SignUpForm />
      </Page>
    </Container>
  );
};

export default SignUpPage;
