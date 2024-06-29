import css from './SignUpPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Page from '../../components/Page/Page';
import { Helmet } from 'react-helmet-async';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import { useTranslation } from 'react-i18next';

const SignUpPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('signupPage')}</title>
      </Helmet>
      <Page>
        <SignUpForm />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default SignUpPage;
