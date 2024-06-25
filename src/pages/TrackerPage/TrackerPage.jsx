import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

import Calendar from '../../components/Calendar/Calendar';
import '../../index.css';
import css from './TrackerPage.module.css';
import DailyInfo from 'components/DailyInfo/DailyInfo';

  const TrackerPage = () => {


  return (
      <Page>
        <WaterMainInfo />
        <section className={css.trackerSection}>
          <WaterDetailedInfo />
          <DailyInfo />
          <Calendar />
        </section>
      </Page>
  );
};

export default TrackerPage;
