import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';
// import WaterForm from '../../components/WaterForm/WaterForm';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AQUATRACK: Water consumption tracker</title>
      </Helmet>
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
        {/* <WaterForm isOpen={true}/> */}
      </Page>
    </>
  );
};

export default Homepage;
