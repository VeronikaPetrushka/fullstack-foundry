import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

import { useTranslation } from 'react-i18next';

// import WaterForm from '../../components/WaterForm/WaterForm';

const Homepage = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('homePage')}</title>
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
