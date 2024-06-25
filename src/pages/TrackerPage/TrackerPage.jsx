import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { userInfo } from '../../redux/user/operations';
import Calendar from '../../components/Calendar/Calendar';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const [selectedDate, setSelectedDate] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfo());
  });

  const handleCalendarBtnClick = (btnDate) => {
    setSelectedDate(btnDate);
    console.log(selectedDate);
  };

  return (
    <Page>
      <WaterMainInfo />
      <section className={css.trackerSection}>
        <WaterDetailedInfo />
        <Calendar handleClick={handleCalendarBtnClick} />
      </section>
    </Page>
  );
};

export default TrackerPage;
