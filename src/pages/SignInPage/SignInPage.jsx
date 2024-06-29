import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

import { useTranslation } from 'react-i18next';

const SignInPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('signinPage')}</title>
      </Helmet>
      <Page>
        <SignInForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default SignInPage;
