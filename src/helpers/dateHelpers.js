function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export const getDateObject = (date = null) => {
  const currentDate = date ? new Date(date) : new Date();
  const today = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
    dayInMonth: daysInMonth(
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    ),
    fullDate: currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0'),
    monthName: currentDate.toLocaleString('en', { month: 'long' }),
    full: currentDate,
  };
  return today;
};

export const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if(isNaN(date1) || isNaN(date2)) {
    return false;
  }
  if (date1 < date2) {
    return "<";
  } else if (date1 > date2) {
    return ">";
  } else {
    return "=";
  }
};

export const dateIsEqual = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if(isNaN(date1) || isNaN(date2)) {
    return false;
  }
  if (date1 === date2) {
    return true;
  } else {
    return false;
  }

}

export const dateIsBetween = (d, d1, d2) => {
  let date = new Date(d).getTime();
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();
  if(isNaN(date) || isNaN(date1) || isNaN(date2)) {
    return null;
  }

  if(date >= date1 && date <= date2){
    return true;
  }else{
    return false;
  }


}
