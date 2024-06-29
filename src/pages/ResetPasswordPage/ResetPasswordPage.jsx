import css from './ResetPasswordPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

import { useTranslation } from 'react-i18next';

const ResetPasswordPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('resetPage')}</title>
      </Helmet>
      <Page>
        <ResetPassword />
        <div className={css.divDesktopOnly}>
          <AdvantagesSection />
        </div>
      </Page>
    </>
  );
};

export default ResetPasswordPage;
