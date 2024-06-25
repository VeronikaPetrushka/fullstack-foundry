import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Page from '../../components/Page/Page';
// import WaterForm from '../../components/WaterForm/WaterForm';


const Homepage = () => {

  return (
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
        {/* <WaterForm isOpen={true}/> */}
      </Page>
  );
};

export default Homepage;
