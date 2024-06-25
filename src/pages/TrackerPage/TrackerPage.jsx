import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

import Calendar from '../../components/Calendar/Calendar';
import '../../index.css';
import css from './TrackerPage.module.css';

  const TrackerPage = () => {


  return (
      <Page>
        <WaterMainInfo />
        <section className={css.trackerSection}>
          <WaterDetailedInfo />
          <Calendar />
        </section>
      </Page>
  );
};

export default TrackerPage;
