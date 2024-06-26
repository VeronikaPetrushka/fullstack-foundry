import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { userInfo } from '../../redux/user/operations';
import { getDateObject } from '../../helpers/dateHelpers';
import Calendar from '../../components/Calendar/Calendar';
import { Helmet } from 'react-helmet-async';
import css from './TrackerPage.module.css';

import DailyInfo from '../../components/DailyInfo/DailyInfo';

import ChooseDate from '../../components/ChooseDate/ChooseDate';

const TrackerPage = () => {

  // поточна або вибрана в календарі дата для якої треба виводити дані в усіх компонентах
  const [selectedDate, setSelectedDate] = useState(getDateObject());

  const handleCalendarBtnClick = (btnDate) => {
    setSelectedDate(getDateObject(btnDate));
  };


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);
  // console.log("Selected date: ", selectedDate);

  return (
    <>
      <Helmet>
        <title>AQUATRACK: Record daily water intake and track</title>
      </Helmet>
      <Page>
        <WaterMainInfo selectedDate={selectedDate} />
        <section className={css.trackerSection}>
          <WaterDetailedInfo />
          <ChooseDate  selectedDate={selectedDate}/>
          <Calendar selectedDate={selectedDate} handleClick={handleCalendarBtnClick} />
        </section>
      </Page>
    </>
  );
};

export default TrackerPage;
