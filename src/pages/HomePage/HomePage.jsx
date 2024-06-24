import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Page from '../../components/Page/Page';


const Homepage = () => {

  return (
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
      </Page>
  );
};

export default Homepage;
