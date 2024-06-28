import s from './ChooseDate.module.css';
import { getDateObject } from '../../helpers/dateHelpers';
import { useTranslation } from 'react-i18next';

const ChooseDate = ({ selectedDate }) => {
    const { day, month_name } = selectedDate;

    const { t } = useTranslation();

  return (
    <div className={s.div}>
      <h3 className={s.selectedDate}>{selectedDate.fullDate === getDateObject().fullDate ? t('today') : `${day}, ${t(month_name.toLowerCase())}`}</h3>
    </div>
  );
};

export default ChooseDate;
