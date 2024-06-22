import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';


const Homepage = () => {
  return (
    <Container>
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
      </Page>
    </Container>
  );
};

export default Homepage;
