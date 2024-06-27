import css from './ResetPasswordPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import { Helmet } from 'react-helmet-async';
import Page from '../../components/Page/Page';

const ResetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>AQUATRACK: Reset your password</title>
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
