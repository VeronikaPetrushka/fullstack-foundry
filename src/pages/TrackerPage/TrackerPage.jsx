import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { userInfo } from '../../redux/user/operations';
import { getDateObject } from '../../helpers/dateHelpers';
import Calendar from '../../components/Calendar/Calendar';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  // поточна або вибрана в календарі дата для якої треба виводити дані в усіх компонентах
  const [selectedDate, setSelectedDate] = useState(getDateObject());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfo());
  });

  const handleCalendarBtnClick = (btnDate) => {
    setSelectedDate(getDateObject(btnDate));
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
