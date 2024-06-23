import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { Calendar } from '../../components/Calendar/Calendar';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import '../../index.css';
import css from './TrackerPage.module.css';

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const TrackerPage = () => {
  const currentDate = new Date();
  const today = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    dayInMonth: daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear()),
  }

  /**
   * send request to API for get data for today by default
   * save to const data
   */
  const data = [
    { day: 1, procent: 100 },
    { day: 2, procent: 100 },
    { day: 3, procent: 100 },
    { day: 4, procent: 65 },
    { day: 5, procent: 100 },
    { day: 6, procent: 100 },
    { day: 7, procent: 100 },
    { day: 8, procent: 100 },
    { day: 9, procent: 100 },
    { day: 10, procent: 90 },
    { day: 11, procent: 100 },
    { day: 12, procent: 100 },
    { day: 13, procent: 100 },
    { day: 14, procent: 80 },
    { day: 15, procent: 100 },
    { day: 16, procent: 100 },
    { day: 17, procent: 100 },
    { day: 18, procent: 100 },
    { day: 19, procent: 100 },
    { day: 20, procent: 100 },
    { day: 21, procent: 95 },
    { day: 22, procent: 100 },
    { day: 23, procent: 100 },
    { day: 24, procent: 100 },
    { day: 25, procent: 100 },
    { day: 26, procent: 100 },
    { day: 27, procent: 100 },
  ];

  return (
    <Container>
      <Page>
        <WelcomeSection />
        <div className={css.trackerSection}>
          <Calendar data={data} today={today} />
        </div>
      </Page>
    </Container>
  );
};

export default TrackerPage;
