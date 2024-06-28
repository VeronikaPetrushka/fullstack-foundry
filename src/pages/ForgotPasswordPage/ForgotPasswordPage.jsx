import css from './ForgotPasswordPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

import LangSwitch from '../../components/LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('forgotPage')}</title>
      </Helmet>
      <Page>
        <LangSwitch />
        <ForgotPassword />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default ForgotPasswordPage;
