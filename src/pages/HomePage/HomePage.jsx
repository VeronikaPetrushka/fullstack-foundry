import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
// import WaterForm from '../../components/WaterForm/WaterForm';


const Homepage = () => {

  return (
    <Container>
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
        {/* <WaterForm isOpen={true}/> */}
      </Page>
    </Container>
  );
};

export default Homepage;
